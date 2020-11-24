module.exports = app => {

    const checkLoggedIn = (req, res, next) => req.isAuthenticated() ? next() : res.render('index', { loginErrorMessage: 'Please, log in or sign up to access' })

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/', require('./auth.routes'))
    app.use('/movies', require('./movies.routes.js'))
    app.use('/series', require('./series.routes.js'))
    app.use('/directors', require('./directors.routes.js'))
    app.use('/actors', require('./actors.routes.js'))

    app.use('/profile', checkLoggedIn, require('./profile.routes'))

}