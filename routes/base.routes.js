const express = require('express')
const router = express.Router()


const Movie = require('../models/movie.model')


// Endpoints

router.get('/', (req, res) => res.render('index'))



router.get('/movies', (req, res, next) => {
    Movie
        .find()
        .then(movies => res.render('movies', { movies }))
        .catch(err => next(err))
})


router.get('/profile', (req, res) => {
    // INCLUIR ID DE USUARIO
    res.render('auth/user-profile', { user: req.user })
})





module.exports = router

