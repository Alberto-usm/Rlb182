const express = require('express');
const router = express.Router();
const actividadController = require('../controllers/actividadController');

router.get('/', actividadController.viewActividad);
router.put('/:id', actividadController.changeActividad);
router.post('/', actividadController.insertActividad);
router.delete('/:id', actividadController.deleteActividad);
router.get('/:id', actividadController.viewOneActividad);



module.exports = router;