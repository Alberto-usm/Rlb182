const express = require('express');
const router = express.Router();
const multer = require('multer');
const documentoController = require('../controllers/documentoController');



router.get('/', documentoController.viewDocumentos);
router.get('/filtro/:idGrado', documentoController.filterDocumentos);
router.get('/bajada/:filename', documentoController.bajadaDocumento);
router.put('/:id', documentoController.changeDocumento);
router.post('/', documentoController.insertDocumento);
router.delete('/:id', documentoController.deleteDocumento);
router.get('/:id', documentoController.viewOneDocumento);
//router.post('/upload', [subida.single('file0')], documentoController.uploadDocumento);
router.post('/upload',documentoController.subida, documentoController.uploadDocumento);




module.exports = router;