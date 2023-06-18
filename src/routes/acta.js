const express = require('express');
const router = express.Router();
const multer = require('multer');
const actaController = require('../controllers/actaController');



router.get('/', actaController.viewActas);
router.get('/filtro/:idGrado', actaController.filterActas);
router.get('/bajada/:filename', actaController.bajadaActa);
router.put('/:id', actaController.changeActa);
router.post('/', actaController.insertActa);
router.delete('/:id', actaController.deleteActa);
router.get('/:id', actaController.viewOneActa);
//router.post('/upload', [subida.single('file0')], documentoController.uploadDocumento);
router.post('/upload',actaController.subida, actaController.uploadActa);




module.exports = router;