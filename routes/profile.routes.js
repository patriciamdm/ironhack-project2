const express = require('express')
const router = express.Router()

const User = require('../models/user.model')


// const axios = require('axios')
// const apiHandler = axios.create({
//     baseURL: "https://api.themoviedb.org/3"
// })


const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false

const apiData = (yes) => yes

const moviesListEmpty = (req) => (req.user.apilists.watchlist.movies.length === 0 || req.user.apilists.likes.movies.length === 0 || req.user.apilists.seen.movies.length === 0) ? true : null
const seriesListEmpty = (req) => (req.user.apilists.watchlist.series.length === 0 || req.user.apilists.likes.series.length === 0 || req.user.apilists.seen.series.length === 0) ? true : null

const lastIndex = (array) => array.length - 1;





// USER PROFILE PAGE

router.get('/', (req, res, next) => {

    User
        .findById(req.user.id)
        .then(theUser => {

            const lastMovieWL = theUser.apilists.watchlist.movies[lastIndex(theUser.apilists.watchlist.movies)]
            const lastMovieLK = theUser.apilists.likes.movies[lastIndex(theUser.apilists.likes.movies)]
            const lastMovieSN = theUser.apilists.seen.movies[lastIndex(theUser.apilists.seen.movies)]
            const lastSeriesWL = theUser.apilists.watchlist.series[lastIndex(theUser.apilists.watchlist.series)]
            const lastSeriesLK = theUser.apilists.likes.series[lastIndex(theUser.apilists.likes.series)]
            const lastSeriesSN = theUser.apilists.seen.series[lastIndex(theUser.apilists.seen.series)]

            res.render('user/user-profile', { theUser, lastMovieWL, lastMovieLK, lastMovieSN, lastSeriesWL, lastSeriesLK, lastSeriesSN, apiData: apiData(true), isLogged: isLogged(req), moviesListEmpty: moviesListEmpty(req), seriesListEmpty: seriesListEmpty(req) })
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
        .then(() => res.redirect('/profile'))
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
        .then(theUser => res.render('user/user-watchlist', { theUser, moviesWL: theUser.apilists.watchlist.movies, seriesWL: theUser.apilists.watchlist.series, apiData: apiData(true), isLogged: isLogged(req), moviesListEmpty: moviesListEmpty(req), seriesListEmpty: seriesListEmpty(req) }))
        .catch(err => next((err)))
})

// DELETE ELEMENT FROM USER'S WATCHLIST

router.post('/watchlist/remove', (req, res, next) => {

    if (req.query.content == 'movies') {
        User
            .findById(req.user.id)
            .then(theUser => theUser.apilists.watchlist.movies.filter(elm => elm.db_id != req.query.db_id))
            .then(newList => User.findByIdAndUpdate(req.user.id, { "apilists.watchlist.movies": newList }))
            .then(theUser => res.redirect(`/profile/watchlist?id=${theUser.id}`))
            .catch(err => next((err)))
        
    } else if (req.query.content == 'series') {
        User
            .findById(req.user.id)
            .then(theUser => theUser.apilists.watchlist.series.filter(elm => elm.db_id != req.query.db_id))
            .then(newList => User.findByIdAndUpdate(req.user.id, { "apilists.watchlist.series": newList }))
            .then(theUser => res.redirect(`/profile/watchlist?id=${theUser.id}`))
            .catch(err => next((err)))
    }
})




// USER'S SEEN LIST PAGE

router.get('/seen', (req, res, next) => {
    User
        .findById(req.query.id)
        .then(theUser => res.render('user/user-seen', { theUser, moviesSN: theUser.apilists.seen.movies, seriesSN: theUser.apilists.seen.series, apiData: apiData(true), isLogged: isLogged(req), moviesListEmpty: moviesListEmpty(req), seriesListEmpty: seriesListEmpty(req) }))
        .catch(err => next(new Error(err)))
})

// DELETE ELEMENT FROM USER'S SEEN LIST

router.post('/seen/remove', (req, res, next) => {

    if (req.query.content == 'movies') {
        User
            .findById(req.user.id)
            .then(theUser => theUser.apilists.seen.movies.filter(elm => elm.db_id != req.query.db_id))
            .then(newList => User.findByIdAndUpdate(req.user.id, { "apilists.seen.movies": newList }))
            .then(theUser => res.redirect(`/profile/seen?id=${theUser.id}`))
            .catch(err => next((err)))
        
    } else if (req.query.content == 'series') {
        User
            .findById(req.user.id)
            .then(theUser => theUser.apilists.seen.series.filter(elm => elm.db_id != req.query.db_id))
            .then(newList => User.findByIdAndUpdate(req.user.id, { "apilists.seen.series": newList }))
            .then(theUser => res.redirect(`/profile/seen?id=${theUser.id}`))
            .catch(err => next((err)))
    }
})




// USER'S LIKES LIST PAGE

router.get('/likes', (req, res, next) => {
    User
        .findById(req.query.id)
        .then(theUser => res.render('user/user-likes', { theUser, moviesLK: theUser.apilists.likes.movies, seriesLK: theUser.apilists.likes.series, apiData: apiData(true), isLogged: isLogged(req), moviesListEmpty: moviesListEmpty(req), seriesListEmpty: seriesListEmpty(req) }))
        .catch(err => next(new Error(err)))
})

// DELETE ELEMENT FROM USER'S LIKES LIST

router.post('/likes/remove', (req, res, next) => {

    if (req.query.content == 'movies') {
        User
            .findById(req.user.id)
            .then(theUser => theUser.apilists.likes.movies.filter(elm => elm.db_id != req.query.db_id))
            .then(newList => User.findByIdAndUpdate(req.user.id, { "apilists.likes.movies": newList }))
            .then(theUser => res.redirect(`/profile/likes?id=${theUser.id}`))
            .catch(err => next((err)))
        
    } else if (req.query.content == 'series') {
        User
            .findById(req.user.id)
            .then(theUser => theUser.apilists.likes.series.filter(elm => elm.db_id != req.query.db_id))
            .then(newList => User.findByIdAndUpdate(req.user.id, { "apilists.likes.series": newList }))
            .then(theUser => res.redirect(`/profile/likes?id=${theUser.id}`))
            .catch(err => next((err)))
    }
})




module.exports = router