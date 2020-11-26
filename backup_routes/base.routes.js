const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')
const Series = require('../models/series.model.js')

const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false



// ENDPOINTS



router.get('/', (req, res, next) => {
    let popularMovies

    Movie
        .find()
        .sort({ popularity: -1 })
        .then(allMovies => popularMovies = allMovies)
        .then(() => Series.find().sort({ popularity: -1 }))
        .then(allSeries => {
            res.render('index', { popularMovies: popularMovies, popularSeries: allSeries, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        }).catch(err => next(new Error(err)))

    // apiHandler
    //     .get(`/movie/popular?api_key=95ad659b54a1464fdb415db2270f7402`)
    //     .then(allMovies => popularMovies = allMovies.data.results)
    //     .then(() => apiHandler.get(`/tv/popular?api_key=95ad659b54a1464fdb415db2270f7402`))
    //     .then(popularSeries => {

    //         const topPopularMovies = popularMovies.splice(0, 10)
    //         const topPopularSeries = popularSeries.data.results.splice(0, 10)
    //         res.render('index', { popularMovies: topPopularMovies, popularSeries: topPopularSeries, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
    //     })
    //     .catch(err => next(new Error(err)))


    // Series
    //     .find()
    //     .sort({ popularity: -1 })
    //     .then(allSeries => {
    //         res.render('data/series', { allSeries, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
    //     })
    //     .catch(err => next(new Error(err)))
    // Movie
    //     .find()
    //     .sort({ popularity: -1 })
    //     .then(allMovies => res.render('data/movies', { allMovies, isLogged: isLogged(req), isNotLogged: isNotLogged(req) }))
    //     .catch(err => next(new Error(err)))
})
module.exports = router

