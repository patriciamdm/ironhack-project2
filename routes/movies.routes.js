const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')
const User = require('../models/user.model')

const axios = require('axios')
const apiHandler = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})



const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false




// ALL MOVIES INDEX

router.get('/', (req, res, next) => {

    apiHandler
        .get(`/movie/popular?api_key=95ad659b54a1464fdb415db2270f7402`)
        .then(allMovies => res.render('data/movies', { allMovies: allMovies.data.results, isLogged: isLogged(req), isNotLogged: isNotLogged(req) }))
        .catch(err => next(err))

    // Movie
    //     .find()
    //     .sort({ popularity: -1 })
    //     .then(allMovies => res.render('data/movies', { allMovies, isLogged: isLogged(req), isNotLogged: isNotLogged(req) }))
    //     .catch(err => next(err))
})

//SEARCH
router.post('/', (req, res, next) => {

    const { search } = req.body
    const searchCleaned = search.replace(/\s/g, '%20')
    console.log(searchCleaned)


    apiHandler
        .get(`/search/movie?api_key=95ad659b54a1464fdb415db2270f7402&query=${searchCleaned}`)
        .then(search => {
            const searchResults = search.data.results

            res.render('data/movies', { searchResults, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(err))

    // Movie
    //     .find()
    //     .sort({ popularity: -1 })
    //     .then(allMovies => res.render('data/movies', { allMovies, isLogged: isLogged(req), isNotLogged: isNotLogged(req) }))
    //     .catch(err => next(err))
})




// INDIVIDUAL MOVIE DETAILS

router.get('/:id', (req, res, next) => {

    apiHandler
        .get(`/movie/${req.params.id}?api_key=95ad659b54a1464fdb415db2270f7402`)
        .then(movie => {
            apiHandler
                .get(`/movie/${req.params.id}/credits?api_key=95ad659b54a1464fdb415db2270f7402`)
                .then(movieCredits => {
                    const credits = movieCredits.data.cast
                    const orderedCredits = credits.sort((a, b) => {
                        if (a.popularity > b.popularity) {
                            return -1
                        }
                        if (a.popularity < b.popularity) {
                            return 1
                        }
                        return 0
                    })
                    const topPopularActors = orderedCredits.splice(0, 10)
                    const thisMovie = movie.data
                    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    const date = thisMovie.release_date
                    const movieDate = {
                        day: date.slice(8),
                        month: months[parseInt(date.slice(5, 7), 10)],
                        year: date.slice(0, 4)
                    }
                    console.log(topPopularActors)

                    res.render('data/movie-detail', { thisMovie, topPopularActors, release_date: movieDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
                })
                .catch(err => next(err))

        })
        .catch(err => next(err))


    // Movie
    //     .findById(req.params.id)
    //     .then(thisMovie => {
    //         const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //         const movieDate = {
    //             day: thisMovie.release_date.getDate(),
    //             month: months[thisMovie.release_date.getMonth()],
    //             year: thisMovie.release_date.getFullYear()
    //         }
    //         res.render('data/movie-detail', { thisMovie, release_date: movieDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
    //     })
    //     .catch(err => next(err))
})




// ADD MOVIE TO USER'S LISTS

// router.post('/:id', (req, res, next) => {
// const moviesWL = req.user.watchlist.movies
// const moviesSN = req.user.seen.movies
// const moviesLK = req.user.likes.movies

// if (req.query.add === 'watchlist') {
//     let newList = [...moviesWL, req.params.id]

//     User
//         .findByIdAndUpdate(req.user.id, { "watchlist.movies": newList })
//         .then(() => res.redirect('/movies'))
//         .catch(err => next(err))

// } else if (req.query.add === 'seen') {
//     let newList = [...moviesSN, req.params.id]

//     User
//         .findByIdAndUpdate(req.user.id, { "seen.movies": newList })
//         .then(() => res.redirect('/movies'))
//         .catch(err => next(err))

// } else if (req.query.add === 'likes') {
//     let newList = [...moviesLK, req.params.id]

//     User
//         .findByIdAndUpdate(req.user.id, { "likes.movies": newList })
//         .then(() => res.redirect('/movies'))
//         .catch(err => next(err))
// }
// })




module.exports = router