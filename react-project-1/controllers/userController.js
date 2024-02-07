const User = require('../models/userModel')
const mongoose = require("mongoose")
// get all users
const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}

// get single User
const getUser = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "User does not exist"})
    }

    const user = await User.findById(id)
    if(!workout){
        return res.status(404).json({error: "User does not exist"})
    }
    res.status(200).json(user)
}

//create a new User
const createUser = async (req, res) => {
    const {fullname, address, contact} = req.body
    
    let emptyFields = []
    
    if(!fullname){
        emptyFields.push('fullname')
    }
    if(!address){
        emptyFields.push('address')
    }
    if(!contact){
        emptyFields.push('contact')
    }

    if(emptyFields.length > 0){
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields})
    }

    try{
        const user = await User.create({fullname, address, contact})
        res.status(200).json(user)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

// delete a User
const deleteUser = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "User does not exist"})
    }
    const user = await User.findOneAndDelete({_id: id})
    if(!user){
        return res.status(400).json({error: "User does not exist"})
    }
    res.status(200).json(user)
}
// update a user
const updateUser = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "User does not exist"})
    }
    const user = await User.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!user){
        return res.status(400).json({error: "User does not exist"})
    }
    res.status(200).json(user)
}
module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
}