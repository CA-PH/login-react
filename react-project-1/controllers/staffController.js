const Staff = require('../models/staffModel')
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// get all staffs
const getStaffs = async (req, res) => {
    const staffs = await Staff.find({}).sort({createdAt: -1})

    res.status(200).json(staffs)
}

// get single staff
const getStaff = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Staff does not exist"})
    }

    const staff = await Staff.findById(id)
    if(!workout){
        return res.status(404).json({error: "Staff does not exist"})
    }
    res.status(200).json(staff)
}

//create a new staff
const createStaff = async (req, res) => {
    const {email, fullname, password, role} = req.body
    
    let emptyFields = []
    
    if(!email){
        emptyFields.push('email')
    }
    if(!fullname){
        emptyFields.push('fullname')
    }
    if(!password){
        emptyFields.push('password')
    }
    if(!role){
        emptyFields.push('role')
    }

    if(emptyFields.length > 0){
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields})
    }

    try{
        const staff = await Staff.create({email, fullname, password, role})
        res.status(200).json(staff)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete a staff
const deleteStaff = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Staff does not exist"})
    }
    const staff = await Staff.findOneAndDelete({_id: id})
    if(!staff){
        return res.status(400).json({error: "Staff does not exist"})
    }
    res.status(200).json(staff)
}
// update a staff
const updateStaff = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Staff does not exist"})
    }
    const staff = await Staff.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!staff){
        return res.status(400).json({error: "Staff does not exist"})
    }
    res.status(200).json(staff)
}
// login staff
const loginStaff = async (req, res) => {
    const {email, password} = req.body

    try {
        const staff = await Staff.login(email, password)

        const token = createToken(staff._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

const signupStaff = async (req, res) => {
    const {fullname, role, email, password} = req.body

    try {
        const user = await Staff.signup(fullname, role, email, password)

        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createStaff,
    getStaffs,
    getStaff,
    deleteStaff,
    updateStaff,
    loginStaff,
    signupStaff,
}