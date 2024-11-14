const express = require('express');
const router = express.Router();
const dataProvider = require('../data/dataProvider'); 

// Ruta de login (GET)
router.get('/login', (req, res) => {
    res.render('login'); 
});

// Ruta de login (POST) para procesar el formulario de inicio de sesión
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = dataProvider.getUserByUsername(username);

    console.log('Usuario encontrado:', user); 

    if (user && user.password === password) {
        req.session.user = user; 
        res.redirect('/home'); 
    } else {
        res.render('login', { error: 'Credenciales incorrectas' });
    }
});

module.exports = router;
