const express = require('express')
const router = express.Router()


const Movie = require('../models/movie.model')

const TVshow = require('../models/TVshow.model.js')


// MOVIES

router.get('/', (req, res) => res.render('index'))

router.get('/movies', (req, res, next) => {

    Movie
        .find()
        .then(movies => res.render('data/movies', { movies }))
        .catch(err => next(err))
})


// TV SHOWS

router.get('/TVshows', (req, res, next) => {

    TVshow
        .find()
        .then(TVshows => res.render('data/TVshows', { TVshows }))
        .catch(err => next(err))
})


router.get('/profile', (req, res) => {
    // INCLUIR ID DE USUARIO
    res.render('auth/user-profile', { user: req.user })
})





module.exports = router

