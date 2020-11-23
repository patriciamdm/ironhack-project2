const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')

const Series = require('../models/series.model.js')
const Person = require('../models/person.model.js')
const { get } = require('mongoose')




const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false



// ENDPOINTS

router.get('/', (req, res) => res.render('index', { isLogged: isLogged(req), isNotLogged: isNotLogged(req) }))





// MOVIES
router.get('/movies', (req, res, next) => {

    Movie
        .find()
        .sort({ popularity: -1 })
        .then(movies => res.render('data/movies', { movies, isLogged: isLogged(req), isNotLogged: isNotLogged(req) }))
        .catch(err => next(err))
})

// MOVIE DETAILS

router.get('/movie', (req, res, next) => {

    const movieId = req.query.movie_id

    Movie
        .findById(movieId)
        .then(movie => {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const movieDate = {
                day: movie.release_date.getDate(),
                month: months[movie.release_date.getMonth()],
                year: movie.release_date.getFullYear()
            }
            res.render('data/movie-detail', { movie, release_date: movieDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(err))
})



// SERIES

router.get('/series', (req, res, next) => {
    Series
        .find()
        .sort({ popularity: -1 })
        .then(series => {
            res.render('data/series', { series, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(err))
})

// SERIE DETAILS

router.get('/serie', (req, res, next) => {
    Series
        .findById(req.query.serie_id)
        .then(serie => {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const serieDate = {
                day: serie.first_air_date.getDate(),
                month: months[serie.first_air_date.getMonth()],
                year: serie.first_air_date.getFullYear()
            }
            res.render('data/serie-detail', { serie, first_air_date: serieDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(err))
})





//ACTORS

router.get('/actors', (req, res, next) => {
    Person
        .find({ 'known_for_department': 'Acting' })
        .sort({ popularity: -1 })
        .then(allActors => {
            res.render('data/actors', { allActors, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(err))

})

//ACTOR DETAILS

router.get('/actor', (req, res, next) => {
    Person
        .findById(req.query.actor_id)
        .then(actor => {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const birthDate = {
                day: actor.birthday.getDate(),
                month: months[actor.birthday.getMonth()],
                year: actor.birthday.getFullYear()
            }
            if (actor.deathday) {
                const deathDate = {
                    day: actor.deathday.getDate(),
                    month: months[actor.deathday.getMonth()],
                    year: actor.deathday.getFullYear()
                }
                res.render('data/actor-details', { actor, birthday: birthDate, deathday: deathDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
            } else {
                res.render('data/actor-details', { actor, birthday: birthDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
            }
        })
        .catch(err => next(err))
})




//DIRECTORS

router.get('/directors', (req, res, next) => {
    Person
        .find({ 'known_for_department': 'Directing' })
        .sort({ popularity: -1 })
        .then(allDirectors => {
            res.render('data/directors', { allDirectors, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(err))
})

//DIRECTOR DETAILS

router.get('/director', (req, res, next) => {
    Person
        .findById(req.query.director_id)
        .then(director => {

            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const birthDate = {
                day: director.birthday.getDate(),
                month: months[director.birthday.getMonth()],
                year: director.birthday.getFullYear()
            }
            if (director.deathday) {
                const deathDate = {
                    day: director.deathday.getDate(),
                    month: months[director.deathday.getMonth()],
                    year: director.deathday.getFullYear()
                }
                res.render('data/director-details', { director, birthday: birthDate, deathday: deathDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
            } else {
                res.render('data/director-details', { director, birthday: birthDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
            }
        })
        .catch(err => next(err))
})





module.exports = router

