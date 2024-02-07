const express = require('express')
const {
    createStaff,
    getStaffs,
    getStaff,
    deleteStaff,
    updateStaff,
    loginStaff,
    signupStaff,
} = require('../controllers/staffController')
const router = express.Router()

//GET ALL staffs
router.get('/', getStaffs)

//GET one staff
router.get('/:id', getStaff)

//POST a NEW staff
router.post('/', createStaff)

//LOGIN staff
router.post('/login', loginStaff)

//SIGNUP staff
router.post('/signup', signupStaff)

//DELETE a NEW staff
router.delete('/:id', deleteStaff)

//UPDATE a NEW staff
router.patch('/:id', updateStaff)

module.exports = router;