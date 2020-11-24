const express = require('express')
const router = express.Router()

const User = require('../models/user.model')


const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false
const moviesListEmpty = (req) => (req.user.watchlist.movies.length === 0 || req.user.likes.movies.length === 0 || req.user.seen.movies.length === 0) ? true : null
const seriesListEmpty = (req) => (req.user.watchlist.series.length === 0 || req.user.likes.series.length === 0 || req.user.seen.series.length === 0) ? true : null




// USER PROFILE PAGE

router.get('/', (req, res, next) => {
    User
        .findById(req.user.id)
        .populate('watchlist.movies')
        .populate('watchlist.series')
        .populate('seen.movies')
        .populate('seen.series')
        .populate('likes.movies')
        .populate('likes.series')
        .then(theUser => res.render('user/user-profile', { theUser, isLogged: isLogged(req), moviesListEmpty: moviesListEmpty(req), seriesListEmpty: seriesListEmpty(req) }))
        .catch(err => next(err))
})




// EDIT USER PROFILE FORM

router.get('/edit', (req, res, next) => {
    const userId = req.query.id

    User.findById(userId)
        .then(user => res.render('user/edit-profile', { user, isLogged: isLogged(req) }))
        .catch(err => next(err))
})

// SEND EDIT USER PROFILE FORM

router.post('/edit', (req, res, next) => {
    const userId = req.query.id
    const { name, email, about, img } = req.body

    User.findByIdAndUpdate(userId, { name, email, about, img })
        .then(user => res.render('user/user-profile', { user, isLogged: isLogged(req) }))
        .catch(err => next(err))
})




// DELETE USER PAGE

router.get('/delete', (req, res, next) => {
    const userId = req.query.id

    User.findById(userId)
        .then(user => res.render('user/delete-profile', { user, isLogged: isLogged(req) }))
        .catch(err => next(err))
})

// CONFIRM DELETE USER

router.post('/delete', (req, res, next) => {
    const userId = req.query.id

    User.findByIdAndDelete(userId)
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})




// USER'S WATCHLIST PAGE

router.get('/watchlist', (req, res, next) => {
    User
        .findById(req.query.id)
        .populate('watchlist.movies')
        .populate('watchlist.series')
        .then(theUser => res.render('user/user-watchlist', { theUser, isLogged: isLogged(req), moviesListEmpty: moviesListEmpty(req), seriesListEmpty: seriesListEmpty(req) }))
        .catch(err => next(err))
})


// USER'S SEEN LIST PAGE

router.get('/seen', (req, res, next) => {
    User
        .findById(req.query.id)
        .populate('seen.movies')
        .populate('seen.series')
        .then(theUser => res.render('user/user-seen', { theUser, isLogged: isLogged(req), moviesListEmpty: moviesListEmpty(req), seriesListEmpty: seriesListEmpty(req) }))
        .catch(err => next(err))
})


// USER'S LIKES LIST PAGE

router.get('/likes', (req, res, next) => {
    User
        .findById(req.query.id)
        .populate('likes.movies')
        .populate('likes.series')
        .then(theUser => res.render('user/user-likes', { theUser, isLogged: isLogged(req), moviesListEmpty: moviesListEmpty(req), seriesListEmpty: seriesListEmpty(req) }))
        .catch(err => next(err))
})




module.exports = router