const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')
const Series = require('../models/series.model.js')
const Person = require('../models/person.model.js')
const User = require('../models/user.model')
const axios = require('axios')

const apiHandler = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})



const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false









// MOVIES
router.get('/', (req, res, next) => {

    // apiHandler
    //     .get(`/movie/top_rated?api_key=95ad659b54a1464fdb415db2270f7402`)
    //     .then(allMovies => console.log(allMovies.data.results))
    //     .catch(err => next(err))

    Movie
        .find()
        .sort({ popularity: -1 })
        .then(allMovies => res.render('data/movies', { allMovies, isLogged: isLogged(req), isNotLogged: isNotLogged(req) }))
        .catch(err => next(err))
})


// MOVIE DETAILS

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
        .catch(err => next(err))
})


router.post('/:movie_id', (req, res, next) => {

    // User
    //     .findById(req.user.id)
    //     .then(user => {
    //         if (req.query.add === 'watchlist') {
    //             user.watchlist.movies.push(req.params.movie_id)
    //         } else if (req.query.add === 'likes') {
    //             user.likes.movies.push(req.params.movie_id)
    //         } else if (req.query.add === 'seen') {
    //             user.seen.movies.push(req.params.movie_id)
    //         }
    //         console.log(user)
    //         res.redirect(`/movies/${req.params.movie_id}`)
    //     })
    //     .catch(err => next(err))

    const userId = req.user.id
    const newItem = req.params.movie_id

    if (req.query.add === 'watchlist') {
        // User
        //     .findByIdAndUpdate(userId, { "user.watchlist": { $push: { movies: req.params.id } } }, { new: true })
        //     .then(user => console.log(user))
        //     .catch(err => next(err))

        // Usern
        //     .findById(userId)
        //     .then(user => {

        //         const [newItem, ...movies] = req.user.watchlist.movies;

        //         console.log('The user then:', {movies},  user)
        //     })
        //     .catch(err => next(err))

        console.log('NADA FUNCIONA', req.query.add, 'USER', req.user)

    } else if (req.query.add === 'likes') {
        console.log('sale el 2!', req.query.add)
    } else if (req.query.add === 'seen') {
        console.log('sale el 3!', req.query.add)
    }





})








module.exports = router