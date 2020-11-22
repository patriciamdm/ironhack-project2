const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')

const Series = require('../models/series.model.js')
const Person = require('../models/person.model.js')
const { get } = require('mongoose')



const TVshow = require('../models/TVshow.model.js')


const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false



// ENDPOINTS

router.get('/', (req, res) => res.render('index', { isLogged: isLogged(req), isNotLogged: isNotLogged(req) }))




// MOVIES

// MOVIES
router.get('/movies', (req, res, next) => {

    Movie
        .find()
        .sort({ popularity: -1 })
        .then(movies => res.render('data/movies', { movies }))
        .then(movies => res.render('data/movies', { movies, isLogged: isLogged(req) }))
        .catch(err => next(err))
})
// MOVIE DETAILS

router.get('/movie', (req, res, next) => {

    const movieId = req.query.movie_id

    Movie
        .findById(movieId)
        .then(movie => res.render('data/movie-detail', movie))
        .catch(err => next(err))
})


// SERIES


// TV SHOWS

router.get('/series', (req, res, next) => {

    Series
        .find()
        .sort({ popularity: -1 })
        .then(series => res.render('data/series', { series }))
        .catch(err => next(err))
})

// SERIE DETAILS

router.get('/serie', (req, res, next) => {

    const serieId = req.query.serie_id

    Series
        .findById(serieId)
        .then(serie => {
            console.log(serie)
            res.render('data/serie-detail', serie)
        })
        .catch(err => next(err))
})


//ACTORS

router.get('/actors', (req, res, next) => {

    Person
        .find({ 'known_for_department': 'Acting' })
        .sort({ popularity: -1 })
        .then(allActors => {
            res.render('data/actors', { allActors })
        })
        .catch(err => next(err))

})

//ACTOR DETAILS

router.get('/actor', (req, res, next) => {

    const actorId = req.query.actor_id
    Person
        .findById(actorId)
        .then(actor => {
            console.log(actor)
            res.render('data/actor-details', actor)
        })
        .then(TVshows => res.render('data/TVshows', { TVshows, isLogged: isLogged(req) }))
        .catch(err => next(err))
})

//DIRECTORS

router.get('/directors', (req, res, next) => {

    Person
        .find({ 'known_for_department': 'Directing' })
        .sort({ popularity: -1 })
        .then(allDirectors => {
            res.render('data/directors', { allDirectors })
        })
        .catch(err => next(err))

})

//DIRECTOR DETAILS

router.get('/director', (req, res, next) => {

    const directorId = req.query.director_id
    Person
        .findById(directorId)
        .then(director => {
            console.log(director)
            res.render('data/director-details', director)
        })
        .catch(err => next(err))
})
router.get('/profile', (req, res) => {
    // INCLUIR ID DE USUARIO
    res.render('auth/user-profile', { user: req.user })
})





module.exports = router

