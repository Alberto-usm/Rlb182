const express = require('express');
const router = express.Router();
const documentoController = require('../controllers/documentoController');


router.get('/', documentoController.viewDocumentos);
router.put('/:id', documentoController.changeDocumento);
router.post('/', documentoController.insertDocumento);
router.delete('/:id', documentoController.deleteDocumento);
router.get('/:id', documentoController.viewOneDocumento);


module.exports = router;