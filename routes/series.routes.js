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


// SERIES

router.get('/', (req, res, next) => {
    Series
        .find()
        .sort({ popularity: -1 })
        .then(allSeries => {
            res.render('data/series', { allSeries, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(err))
})

// SERIE DETAILS

router.get('/:id', (req, res, next) => {
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






module.exports = router

