const express = require('express');
const router = express.Router();
const cargoController = require('../controllers/cargoController');


router.get('/', cargoController.viewCargo);
router.put('/:id', cargoController.changeCargo);
router.post('/', cargoController.insertCargo);
router.delete('/:id', cargoController.deleteCargo);
router.get('/:id', cargoController.viewOneCargo);





module.exports = router;