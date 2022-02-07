const express = require('express');
const router = express.Router();

//enrrutando MySQL
const conexion = require('../database/db');


//Enrutando vistas
router.get('/', (req, res) => {
    res.render('index')
});


module.exports = router