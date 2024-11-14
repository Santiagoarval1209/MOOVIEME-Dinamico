const express = require('express');
const router = express.Router();
const dataProvider = require('../data/dataProvider'); 

// Ruta para la página de inicio
router.get('/', (req, res) => {
    
    if (req.session.user) {
        
        const userMovies = dataProvider.getUserMovies(req.session.user.username);
        
        res.render('home', { userMovies });
    } else {
        
        res.redirect('/auth/login');
    }
});

module.exports = router;
