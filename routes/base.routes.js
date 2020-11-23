const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')
const Series = require('../models/series.model.js')
const Person = require('../models/person.model.js')
const User = require('../models/user.model')


//const apiHandler = new APIhandler();



const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false



// ENDPOINTS

router.get('/', (req, res) => res.render('index', { isLogged: isLogged(req), isNotLogged: isNotLogged(req) }))





// MOVIES
router.get('/movies', (req, res, next) => {

    // apiHandler
    //     .getTopRatedMovies()
    //     .then(allMovies => res.render('data/movies', { allMovies, isLogged: isLogged(req), isNotLogged: isNotLogged(req) }))
    //     .catch(err => next(err))

    Movie
        .find()
        .sort({ popularity: -1 })
        .then(allMovies => res.render('data/movies', { allMovies, isLogged: isLogged(req), isNotLogged: isNotLogged(req) }))
        .catch(err => next(err))
})


// MOVIE DETAILS

router.get('/movies/:id', (req, res, next) => {
    Movie
        .findById(req.params.id)
        .then(thisMovie => {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const movieDate = {
                day: thisMovie.release_date.getDate(),
                month: months[thisMovie.release_date.getMonth()],
                year: thisMovie.release_date.getFullYear()
            }
            res.render('data/movie-detail', { thisMovie, release_date: movieDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(err))
})


router.post('/movies/:id', (req, res, next) => {
    
    User
        .findById(req.user.id)
        .then(user => {
            if (req.query.add === 'watchlist') {
                user.watchlist.movies.push(req.params.id)
            } else if (req.query.add === 'likes') {
                user.likes.movies.push(req.params.id)
            } else if (req.query.add === 'seen') {
                user.seen.movies.push(req.params.id)
            }
            console.log(user)
            res.redirect(`/movies/${req.params.id}`)
        })
        .catch(err => next(err))
})








// SERIES

router.get('/series', (req, res, next) => {
    Series
        .find()
        .sort({ popularity: -1 })
        .then(allSeries => {
            res.render('data/series', { allSeries, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(err))
})

// SERIE DETAILS

router.get('/series/:id', (req, res, next) => {
    Series
        .findById(req.params.id)
        .then(thisSerie => {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const serieDate = {
                day: thisSerie.first_air_date.getDate(),
                month: months[thisSerie.first_air_date.getMonth()],
                year: thisSerie.first_air_date.getFullYear()
            }
            res.render('data/serie-detail', { thisSerie, first_air_date: serieDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
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

router.get('/actors/:id', (req, res, next) => {
    Person
        .findById(req.params.id)
        .then(thisActor => {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const birthDate = {
                day: thisActor.birthday.getDate(),
                month: months[thisActor.birthday.getMonth()],
                year: thisActor.birthday.getFullYear()
            }
            if (thisActor.deathday) {
                const deathDate = {
                    day: thisActor.deathday.getDate(),
                    month: months[thisActor.deathday.getMonth()],
                    year: thisActor.deathday.getFullYear()
                }
                res.render('data/actor-details', { thisActor, birthday: birthDate, deathday: deathDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
            } else {
                res.render('data/actor-details', { thisActor, birthday: birthDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
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

router.get('/directors/:id', (req, res, next) => {
    Person
        .findById(req.params.id)
        .then(thisDirector => {

            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const birthDate = {
                day: thisDirector.birthday.getDate(),
                month: months[thisDirector.birthday.getMonth()],
                year: thisDirector.birthday.getFullYear()
            }
            if (thisDirector.deathday) {
                const deathDate = {
                    day: thisDirector.deathday.getDate(),
                    month: months[thisDirector.deathday.getMonth()],
                    year: thisDirector.deathday.getFullYear()
                }
                res.render('data/director-details', { thisDirector, birthday: birthDate, deathday: deathDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
            } else {
                res.render('data/director-details', { thisDirector, birthday: birthDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
            }
        })
        .catch(err => next(err))
})





module.exports = router

