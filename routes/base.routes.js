const express = require('express')
const router = express.Router()

const apiHandler = require('../public/javascripts/api-handler')



const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false



// ENDPOINTS

router.get('/', (req, res) => {
    let popularMovies

    apiHandler
        .get(`/movie/popular?api_key=95ad659b54a1464fdb415db2270f7402`)
        .then(allMovies => popularMovies = allMovies.data.results)
        .then(() => apiHandler.get(`/tv/popular?api_key=95ad659b54a1464fdb415db2270f7402`))
        .then(popularSeries => {

            const topPopularMovies = popularMovies.splice(0, 10)
            res.render('index', { popularMovies: topPopularMovies, popularSeries, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(new Error(err)))

})





module.exports = router

