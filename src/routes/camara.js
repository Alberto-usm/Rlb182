const express = require('express');
const router = express.Router();
const camaraController = require('../controllers/camaraController');

router.get('/', camaraController.viewCamara);
router.put('/:id', camaraController.changeCamara);
router.post('/', camaraController.insertCamara);
router.delete('/:id', camaraController.deleteCamara);
router.get('/:id', camaraController.viewOneCamara);



module.exports = router;