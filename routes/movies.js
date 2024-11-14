const express = require('express');
const router = express.Router();
const dataProvider = require('../data/dataProvider');

// Ruta para mostrar el listado de películas
router.get('/list', (req, res) => {
    const movies = dataProvider.getAllMovies();
    res.render('movies/list', { movies });
});

// Ruta para mostrar el detalle de una película específica
router.get('/detail/:id', (req, res) => {
    const movieId = parseInt(req.params.id, 10);
    const movie = dataProvider.getMovieById(movieId);
    
    if (movie) {
        res.render('movies/detail', { movie });
    } else {
        res.status(404).send('Película no encontrada');
    }
});

module.exports = router;
