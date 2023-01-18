const express = require('express');
const router = express.Router();
const mysqlConnetion = require('../../config');
const mailController = require('../controllers/mailController')


router.post('/',mailController.envioCorreo);

/*router.get('/:id', userController.viewOneUser);*/

/*
router.get('/',(req, res) =>{
    mysqlConnetion.query('SELECT * FROM MENSAJE', (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })    
});

//modifica un registro.
router.put('/:id_correo',(req, res) =>{   
    mysqlConnetion.query('UPDATE MENSAJE SET = ? WHERE id_correo = ?', [req.body,params.id_correo],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })

});

//Inserta un nuevo registro.
router.post('/',(req, res) =>{
    console.log(req.body);
    mysqlConnetion.query('INSERT INTO MENSAJE SET ?' , [req.body],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })

});

//Elimina un registro.
router.delete('/:id_correo',(req, res) =>{
    mysqlConnetion.query('DELETE FROM MENSAJE WHERE id_correo = ?', [req.params.id_correo],
    (err, rows) =>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })

});

*/

module.exports = router;