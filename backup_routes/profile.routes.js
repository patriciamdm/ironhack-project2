const express = require('express')
const router = express.Router()

const User = require('../models/user.model')


const axios = require('axios')
const apiHandler = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})


const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false

const seedsData = (yes) => yes

const moviesListEmpty = (req) => (req.user.seedslists.watchlist.movies.length === 0 || req.user.seedslists.likes.movies.length === 0 || req.user.seedslists.seen.movies.length === 0) ? true : null
const seriesListEmpty = (req) => (req.user.seedslists.watchlist.series.length === 0 || req.user.seedslists.likes.series.length === 0 || req.user.seedslists.seen.series.length === 0) ? true : null

const lastIndex = (array) => array.length - 1;


// USER PROFILE PAGE

router.get('/', (req, res, next) => {

    User
        .findById(req.user.id)
        .populate('seedslists.watchlist.movies')
        .populate('seedslists.watchlist.series')
        .populate('seedslists.likes.movies')
        .populate('seedslists.likes.series')
        .populate('seedslists.seen.movies')
        .populate('seedslists.seen.series')
        .then(theUser => {
            const lastMovieWL = theUser.seedslists.watchlist.movies[lastIndex(theUser.seedslists.watchlist.movies)]
            const lastMovieLK = theUser.seedslists.likes.movies[lastIndex(theUser.seedslists.likes.movies)]
            const lastMovieSN = theUser.seedslists.seen.movies[lastIndex(theUser.seedslists.seen.movies)]
            const lastSeriesWL = theUser.seedslists.watchlist.series[lastIndex(theUser.seedslists.watchlist.series)]
            const lastSeriesLK = theUser.seedslists.likes.series[lastIndex(theUser.seedslists.likes.series)]
            const lastSeriesSN = theUser.seedslists.seen.series[lastIndex(theUser.seedslists.seen.series)]

            res.render('user/user-profile', { theUser, lastMovieWL, lastMovieLK, lastMovieSN, lastSeriesWL, lastSeriesLK, lastSeriesSN, seedsData: seedsData(true), isLogged: isLogged(req), moviesListEmpty: moviesListEmpty(req), seriesListEmpty: seriesListEmpty(req) })
        })
        .catch(err => next(new Error(err)))
})




// EDIT USER PROFILE FORM

router.get('/edit', (req, res, next) => {
    const userId = req.query.id

    User.findById(userId)
        .then(user => res.render('user/edit-profile', { user, isLogged: isLogged(req) }))
        .catch(err => next(new Error(err)))
})

// SEND EDIT USER PROFILE FORM

router.post('/edit', (req, res, next) => {
    const userId = req.query.id
    const { name, email, about, img } = req.body

    User.findByIdAndUpdate(userId, { name, email, about, img })
        .then(user => res.render('user/user-profile', { user, isLogged: isLogged(req) }))
        .catch(err => next(new Error(err)))
})




// DELETE USER PAGE

router.get('/delete', (req, res, next) => {
    const userId = req.query.id

    User.findById(userId)
        .then(user => res.render('user/delete-profile', { user, isLogged: isLogged(req) }))
        .catch(err => next(new Error(err)))
})

// CONFIRM DELETE USER

router.post('/delete', (req, res, next) => {
    const userId = req.query.id

    User.findByIdAndDelete(userId)
        .then(() => res.redirect('/'))
        .catch(err => next(new Error(err)))
})




// USER'S WATCHLIST PAGE

router.get('/watchlist', (req, res, next) => {
    User
        .findById(req.query.id)
        .populate('seedslists.watchlist.movies')
        .populate('seedslists.watchlist.series')
        .then(theUser => res.render('user/user-watchlist', { theUser, seedsData: seedsData(true), isLogged: isLogged(req), moviesListEmpty: moviesListEmpty(req), seriesListEmpty: seriesListEmpty(req) }))
        .catch(err => next(new Error(err)))
})


// USER'S SEEN LIST PAGE

router.get('/seen', (req, res, next) => {
    User
        .findById(req.query.id)
        .populate('seedslists.seen.movies')
        .populate('seedslists.seen.series')
        .then(theUser => res.render('user/user-seen', { theUser, seedsData: seedsData(true), isLogged: isLogged(req), moviesListEmpty: moviesListEmpty(req), seriesListEmpty: seriesListEmpty(req) }))
        .catch(err => next(new Error(err)))
})


// USER'S LIKES LIST PAGE

router.get('/likes', (req, res, next) => {
    User
        .findById(req.query.id)
        .populate('seedslists.likes.movies')
        .populate('seedslists.likes.series')
        .then(theUser => res.render('user/user-likes', { theUser, seedsData: seedsData(true), isLogged: isLogged(req), moviesListEmpty: moviesListEmpty(req), seriesListEmpty: seriesListEmpty(req) }))
        .catch(err => next(new Error(err)))
})




module.exports = router