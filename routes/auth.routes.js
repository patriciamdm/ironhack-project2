const express = require('express')
const router = express.Router()

const passport = require('passport')

const User = require('../models/user.model')

const bcrypt = require('bcryptjs')
const bcryptSalt = 10



// CREAR CUENTA

router.get('/signup', (req, res) => res.render('auth/sign-up'))

router.post('/signup', (req, res, next) => {
    const { username, password } = req.body

    if (!username || !password) {
        res.render('auth/sign-up', { errorMsg: 'Please, fill in all information' })
        return
    }

    User
        .findOne({ username })
        .then(user => {
            if (user) {
                res.render('auth/sign-up', { errorMsg: 'That email is already registered' })
                return
            }

            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)

            User
                .create({ username, password: hashPass })
                .then(() => res.redirect('/'))
                .catch(() => res.render('auth/sign-up', { errorMsg: 'There was an error' }))
        })
})





// INICIO DE SESIÓN

router.get('/login', (req, res) => res.render('auth/log-in', { errorMsg: req.flash('error') }))

router.post('/login', passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true,
    passReqToCallback: true
}))




router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/login')
})

module.exports = router
