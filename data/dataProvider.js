const fs = require('fs');
const path = require('path');

// Ruta de los archivos JSON
const moviesPath = path.join(__dirname, 'movies.json');
const usersPath = path.join(__dirname, 'users.json');

// Función para obtener todas las películas
function getAllMovies() {
    try {
        const data = fs.readFileSync(moviesPath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error al leer el archivo de películas:', error);
        return [];
    }
}

// Función para obtener los datos de un usuario por nombre de usuario
function getUserByUsername(username) {
    try {
        const data = fs.readFileSync(usersPath, 'utf-8');
        const users = JSON.parse(data);
        return users.find(user => user.username === username);
    } catch (error) {
        console.error('Error al leer el archivo de usuarios:', error);
        return null;
    }
}

// Función para obtener una película por su ID
function getMovieById(id) {
    try {
        const data = fs.readFileSync(moviesPath, 'utf-8');
        const movies = JSON.parse(data);
        return movies.find(movie => movie.id === id);
    } catch (error) {
        console.error('Error al leer el archivo de películas:', error);
        return null;
    }
}

// Función para obtener las películas de un usuario específico
function getUserMovies(username) {
    try {
        const data = fs.readFileSync(usersPath, 'utf-8');
        const users = JSON.parse(data);
        const user = users.find(user => user.username === username);

        if (user) {
            const moviesData = fs.readFileSync(moviesPath, 'utf-8');
            const allMovies = JSON.parse(moviesData);
            return user.copies.map(copy => {
                const movie = allMovies.find(movie => movie.id === copy.id_movie);
                return {
                    title: movie.title,
                    image: movie.image,
                    status: copy.status,
                    format: copy.format
                };
            });
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error al obtener las películas del usuario:', error);
        return [];
    }
}

// Exportar todas las funciones, incluyendo getUserMovies
module.exports = {
    getAllMovies,
    getUserByUsername,
    getMovieById,
    getUserMovies
};
