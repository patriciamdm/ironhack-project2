const express = require('express')
const router = express.Router()

const Series = require('../models/series.model.js')
const User = require('../models/user.model')


const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false



// ALL SERIES INDEX

router.get('/', (req, res, next) => {

    Series
        .find()
        .sort({ popularity: -1 })
        .then(allSeries => {
            res.render('data/series', { allSeries, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(new Error(err)))
})

//SEARCH
router.post('/', (req, res, next) => {

    const { search } = req.body

    Series
        .find({ name: search })
        .sort({ popularity: -1 })
        .then(searchResults => {
            res.render('data/series', { searchResults, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(new Error(err)))

})


// INDIVIDUAL SERIES DETAILS

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
        .catch(err => next(new Error(err)))
})


// ADD SERIES TO USER'S LISTS

router.post('/:id', (req, res, next) => {
    const seriesWL = req.user.seedslists.watchlist.series
    const seriesSN = req.user.seedslists.seen.series
    const seriesLK = req.user.seedslists.likes.series

    if (req.query.add === 'watchlist') {
        let newList = [...seriesWL, req.params.id]

        User
            .findByIdAndUpdate(req.user.id, { "seedslists.watchlist.series": newList })
            .then(() => res.redirect('/series'))
            .catch(err => next(new Error(err)))

    } else if (req.query.add === 'seen') {
        let newList = [...seriesSN, req.params.id]

        User
            .findByIdAndUpdate(req.user.id, { "seedslists.seen.series": newList })
            .then(() => res.redirect('/series'))
            .catch(err => next(new Error(err)))

    } else if (req.query.add === 'likes') {
        let newList = [...seriesLK, req.params.id]

        User
            .findByIdAndUpdate(req.user.id, { "seedslists.likes.series": newList })
            .then(() => res.redirect('/series'))
            .catch(err => next(new Error(err)))
    }
})




module.exports = router