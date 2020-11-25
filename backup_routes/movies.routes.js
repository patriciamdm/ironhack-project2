const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')
const User = require('../models/user.model')

const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false



// ALL MOVIES INDEX

router.get('/', (req, res, next) => {

    Movie
        .find()
        .sort({ popularity: -1 })
        .then(allMovies => res.render('data/movies', { allMovies, isLogged: isLogged(req), isNotLogged: isNotLogged(req) }))
        .catch(err => next(new Error(err)))
})


// SEARCH BAR

router.post('/', (req, res, next) => {

    const { search } = req.body

    Movie
        .find({ title: search })
        .sort({ popularity: -1 })
        .then(searchResults => {
            res.render('data/movies', { searchResults, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(new Error(err)))
})



// INDIVIDUAL MOVIE DETAILS

router.get('/:id', (req, res, next) => {


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
        .catch(err => next(new Error(err)))
})




// ADD MOVIE TO USER'S LISTS

router.post('/:id', (req, res, next) => {
    const moviesWL = req.user.seedslists.watchlist.movies
    const moviesSN = req.user.seedslists.seen.movies
    const moviesLK = req.user.seedslists.likes.movies

    if (req.query.add === 'watchlist') {
        let newList = [...moviesWL, req.params.id]

        User
            .findByIdAndUpdate(req.user.id, { "seedslists.watchlist.movies": newList })
            .then(() => res.redirect('/movies'))
            .catch(err => next(new Error(err)))

    } else if (req.query.add === 'seen') {
        let newList = [...moviesSN, req.params.id]

        User
            .findByIdAndUpdate(req.user.id, { "seedslists.seen.movies": newList })
            .then(() => res.redirect('/movies'))
            .catch(err => next(new Error(err)))

    } else if (req.query.add === 'likes') {
        let newList = [...moviesLK, req.params.id]

        User
            .findByIdAndUpdate(req.user.id, { "seedslists.likes.movies": newList })
            .then(() => res.redirect('/movies'))
            .catch(err => next(new Error(err)))
    }
})




module.exports = router