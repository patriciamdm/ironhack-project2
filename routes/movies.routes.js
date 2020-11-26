const express = require('express')
const router = express.Router()

const User = require('../models/user.model')

const apiHandler = require('../public/javascripts/api-handler')

const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false


// ALL MOVIES INDEX

router.get('/', (req, res, next) => {

    apiHandler
        .get(`/movie/popular?api_key=95ad659b54a1464fdb415db2270f7402`)
        .then(allMovies => res.render('data/movies', { allMovies: allMovies.data.results, isLogged: isLogged(req), isNotLogged: isNotLogged(req) }))
        .catch(err => next(new Error(err)))

})


// SEARCH

router.post('/', (req, res, next) => {

    const { search } = req.body
    const searchCleaned = search.replace(/\s/g, '%20')

    apiHandler
        .get(`/search/movie?api_key=95ad659b54a1464fdb415db2270f7402&query=${searchCleaned}`)
        .then(search => {

            const searchResults = search.data.results
            res.render('data/movies', { searchResults, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(new Error(err)))

})


// INDIVIDUAL MOVIE DETAILS

router.get('/:id', (req, res, next) => {

    let thisMovie

    apiHandler
        .get(`/movie/${req.params.id}?api_key=95ad659b54a1464fdb415db2270f7402`)
        .then(movie => thisMovie = movie.data)
        .then(() => apiHandler.get(`/movie/${req.params.id}/credits?api_key=95ad659b54a1464fdb415db2270f7402`))
        .then(movieCredits => {

            const credits = movieCredits.data.cast
            const orderedCredits = credits.sort((a, b) => {
                a.popularity > b.popularity ? -1 : null
                a.popularity < b.popularity ? 1 : null
                return 0
            })
            const topPopularActors = orderedCredits.splice(0, 10)

            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const date = thisMovie.release_date
            const movieDate = {
                day: date.slice(8),
                month: months[parseInt(date.slice(5, 7), 10)],
                year: date.slice(0, 4)
            }

            res.render('data/movie-detail', { thisMovie, topPopularActors, release_date: movieDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(new Error(err)))

})




// ADD MOVIE TO USER'S LISTS

router.post('/:id', (req, res, next) => {

    apiHandler
        .get(`/movie/${req.params.id}?api_key=95ad659b54a1464fdb415db2270f7402`)
        .then(theMovie => {
            const moviesWL = req.user.apilists.watchlist.movies
            const moviesSN = req.user.apilists.seen.movies
            const moviesLK = req.user.apilists.likes.movies
            const newObj = { db_id: theMovie.data.id, title: theMovie.data.title, poster_path: theMovie.data.poster_path }

            if (req.query.add === 'watchlist') {
                let included = 0
                moviesWL.forEach(elm => {
                    if (elm.title.includes(newObj.title) === true) {
                        included++
                    }
                })
                if (included === 0) {

                    let newList = [...moviesWL, newObj]
                    User
                        .findByIdAndUpdate(req.user.id, { "apilists.watchlist.movies": newList })
                        .then(() => res.redirect('/movies'))
                        .catch(err => next(err))
                } else {
                    console.log('Ya existe la película')
                    res.redirect('/movies')
                }


            } else if (req.query.add === 'seen') {
                let included = 0
                moviesSN.forEach(elm => {
                    if (elm.title.includes(newObj.title) === true) {
                        included++
                    }
                })
                if (included === 0) {
                    let newList = [...moviesSN, newObj]
                    User
                        .findByIdAndUpdate(req.user.id, { "apilists.seen.movies": newList })
                        .then(() => res.redirect('/movies'))
                        .catch(err => next(err))
                } else {
                    console.log('Ya existe la película')
                    res.redirect('/movies')
                }
            } else if (req.query.add === 'likes') {
                let included = 0
                moviesLK.forEach(elm => {
                    if (elm.title.includes(newObj.title) === true) {
                        included++
                    }
                })
                if (included === 0) {
                    let newList = [...moviesLK, newObj]
                    User
                        .findByIdAndUpdate(req.user.id, { "apilists.likes.movies": newList })
                        .then(() => res.redirect('/movies'))
                        .catch(err => next(err))
                } else {
                    console.log('Ya existe la película')
                    res.redirect('/movies')
                }
            }
        })
        .catch(err => next(new Error(err)))


})



module.exports = router