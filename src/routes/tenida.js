const express = require('express');
const router = express.Router();
const tenidaController = require('../controllers/tenidaController');

router.get('/', tenidaController.viewTenida);
router.put('/:id', tenidaController.changeTenida);
router.post('/', tenidaController.insertTenida);
router.delete('/:id', tenidaController.deleteTenida);
router.get('/tenida', tenidaController.viewOneTenida);



module.exports = router;