const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.viewUsers);
router.put('/:id', userController.changeUser);
router.post('/', userController.insertUser);
router.delete('/:id', userController.deleteUser);
router.get('/:id', userController.viewOneUser);





module.exports = router;