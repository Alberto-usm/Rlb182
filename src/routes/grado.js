const express = require('express');
const router = express.Router();
const gradoController = require('../controllers/gradoController');


router.get('/', gradoController.viewGrados);
router.put('/:id', gradoController.changeGrado);
router.post('/', gradoController.insertGrado);
router.delete('/:id', gradoController.deleteGrado);
router.get('/:id', gradoController.viewOneGrado);



module.exports = router;