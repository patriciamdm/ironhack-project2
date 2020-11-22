module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/', require('./auth.routes'))
    app.use('/', require('./profile.routes'))
    
}