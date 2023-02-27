const express = require('express')
const router = express.Router()

// const { getAllItem } = require('../controllers/user') 
const { registerUser, loginUser, getUser, getUsers, updateUser, deleteUser, getAuthToken } = require('../controllers/user');
router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/auth').get(getAuthToken);
router.route('/').get(getUsers);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

// router.route('/').get(getAllItems).post(createItem);
// router.route('/:id').get(getItem).patch(updateItem).delete(deleteItem)

module.exports = router;