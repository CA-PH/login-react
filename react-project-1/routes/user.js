const express = require('express')
const {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
} = require('../controllers/userController')
const router = express.Router()

//GET ALL staffs
router.get('/', getUsers)

//GET one staff
router.get('/:id', getUser)

//POST a NEW staff
router.post('/', createUser)

//DELETE a NEW staff
router.delete('/:id', deleteUser)

//UPDATE a NEW staff
router.patch('/:id', updateUser)

module.exports = router;