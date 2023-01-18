const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');


const {promisify} = require('util');


router.get('/', loginController.getUsuario);
router.post('/singin',loginController.singin);
router.post('/test',loginController.testing);

module.exports = router;