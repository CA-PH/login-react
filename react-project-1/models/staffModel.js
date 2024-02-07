const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema
const staffSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    }
}, {timestamps: true})

staffSchema.statics.signup = async function(fullname, role, email, password) {
    const exists = await this.findOne({ email })

    if (!email || !password || !fullname || !role){
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    
    if(!validator.isStrongPassword(password)){
        throw Error('Password is not strong enough')
    }

    if(exists){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({fullname, role, email, password: hash})

    return user

}

staffSchema.statics.login = async function(email, password){
    if (!email || !password){
        throw Error('All fields must be filled')
    }
    const staff = await this.findOne({ email })
    if(!staff){
        throw Error('Incorrect login')
    }
    const match = await bcrypt.compare(password, staff.password)

    if(!match){
        throw Error('Incorrect login')
    }

    return staff

}
module.exports = mongoose.model('Staff', staffSchema)
