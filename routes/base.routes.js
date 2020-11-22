const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')
const TVshow = require('../models/TVshow.model.js')


const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false



// ENDPOINTS

router.get('/', (req, res) => res.render('index', { isLogged: isLogged(req), isNotLogged: isNotLogged(req) }))




// MOVIES

router.get('/movies', (req, res, next) => {

    Movie
        .find()
        .then(movies => res.render('data/movies', { movies, isLogged: isLogged(req) }))
        .catch(err => next(err))
})




// TV SHOWS

router.get('/TVshows', (req, res, next) => {

    TVshow
        .find()
        .then(TVshows => res.render('data/TVshows', { TVshows, isLogged: isLogged(req) }))
        .catch(err => next(err))
})




module.exports = router

