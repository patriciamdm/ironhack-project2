const express = require('express')
const router = express.Router()

const User = require('../models/user.model')


const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false



router.get('/', (req, res) => {
    res.render('user/user-profile', { user: req.user, isLogged: isLogged(req) })
})




// EDITAR PERFIL

router.get('/edit', (req, res, next) => {
    const userId = req.query.id

    User.findById(userId)
        .then(user => res.render('user/edit-profile', { user, isLogged: isLogged(req) }))
        .catch(err => next(err))
})

router.post('/edit', (req, res, next) => {
    const userId = req.query.id
    const { name, email, about, img } = req.body

    User.findByIdAndUpdate(userId, { name, email, about, img })
        .then(user => res.render('user/user-profile', { user, isLogged: isLogged(req) }))
        .catch(err => next(err))
})




// ELIMINAR PERFIL

router.get('/delete', (req, res, next) => {
    const userId = req.query.id

    User.findById(userId)
        .then(user => res.render('user/delete-profile', { user, isLogged: isLogged(req) }))
        .catch(err => next(err))
})

router.post('/delete', (req, res, next) => {
    const userId = req.query.id

    User.findByIdAndDelete(userId)
        .then(() => res.redirect('/'))
        .catch(err => next(err))
})




// VISUALIZE CONTENT

router.get('/watchlist', (req, res, next) => {
    User
        .findById(req.query.id)
        .populate('watchlist.movies', 'watchlist.series')
        .then(user => res.render('user/user-watchlist', { user, isLogged: isLogged(req) }))
        .catch(err => next(err))
})


router.get('/seen', (req, res, next) => {
    User
        .findById(req.query.id)
        .populate('seen.movies', 'seen.series')
        .then(user => res.render('user/user-seen', { user, isLogged: isLogged(req) }))
        .catch(err => next(err))
})


router.get('/likes', (req, res, next) => {
    User
        .findById(req.query.id)
        .populate('likes.movies', 'likes.series')
        .then(user => res.render('user/user-likes', { user, isLogged: isLogged(req) }))
        .catch(err => next(err))
})






module.exports = router