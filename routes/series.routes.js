const express = require('express')
const router = express.Router()

const User = require('../models/user.model')

const apiHandler = require('../public/javascripts/api-handler')

const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false


// ALL SERIES INDEX

router.get('/', (req, res, next) => {

    apiHandler
        .get(`/tv/popular?api_key=95ad659b54a1464fdb415db2270f7402`)
        .then(allSeries => res.render('data/series', { allSeries: allSeries.data.results, isLogged: isLogged(req), isNotLogged: isNotLogged(req) }))
        .catch(err => next(new Error(err)))

})


//SEARCH
router.post('/', (req, res, next) => {

    const { search } = req.body
    const searchCleaned = search.replace(/\s/g, '%20')

    apiHandler
        .get(`/search/tv?api_key=95ad659b54a1464fdb415db2270f7402&query=${searchCleaned}`)
        .then(search => {
            const searchResults = search.data.results
            res.render('data/series', { searchResults, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(new Error(err)))

})



// INDIVIDUAL SERIES DETAILS

router.get('/:id', (req, res, next) => {

    let thisSerie
    apiHandler
        .get(`/tv/${req.params.id}?api_key=95ad659b54a1464fdb415db2270f7402`)
        .then(serie => thisSerie = serie.data)
        .then(() => apiHandler.get(`/tv/${req.params.id}/credits?api_key=95ad659b54a1464fdb415db2270f7402`))
        .then(serieCredits => {

            const credits = serieCredits.data.cast
            const orderedCredits = credits.sort((a, b) => {
                a.popularity > b.popularity ? -1 : null
                a.popularity < b.popularity ? 1 : null
                return 0
            })
            const topPopularActors = orderedCredits.splice(0, 10)

            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const date = thisSerie.first_air_date
            const serieDate = {
                day: date.slice(8),
                month: months[date.slice(5, 7)],
                year: date.slice(0, 4)
            }

            res.render('data/serie-detail', { thisSerie, topPopularActors, first_air_date: serieDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(new Error(err)))



})




// ADD SERIES TO USER'S LISTS

router.post('/:id', (req, res, next) => {

    apiHandler
        .get(`/tv/${req.params.id}?api_key=95ad659b54a1464fdb415db2270f7402`)
        .then(theSeries => {
            const seriesWL = req.user.apilists.watchlist.series
            const seriesSN = req.user.apilists.seen.series
            const seriesLK = req.user.apilists.likes.series
            const newObj = { db_id: theSeries.data.id, name: theSeries.data.name, poster_path: theSeries.data.poster_path }

            if (req.query.add === 'watchlist') {

                let included = 0
                seriesWL.forEach(elm => {
                    if (elm.name.includes(newObj.name) === true) {
                        included++
                    }
                })
                if (included === 0) {
                    let newList = [...seriesWL, newObj]
                    User
                        .findByIdAndUpdate(req.user.id, { "apilists.watchlist.series": newList })
                        .then(() => res.redirect('/series'))
                        .catch(err => next(err))
                } else {

                    res.redirect('/series')
                }
            } else if (req.query.add === 'seen') {

                let included = 0
                seriesSN.forEach(elm => {
                    if (elm.name.includes(newObj.name) === true) {
                        included++
                    }
                })
                if (included === 0) {
                    let newList = [...seriesSN, newObj]
                    User
                        .findByIdAndUpdate(req.user.id, { "apilists.seen.series": newList })
                        .then(() => res.redirect('/series'))
                        .catch(err => next(err))
                } else {

                    res.redirect('/series')
                }
            } else if (req.query.add === 'likes') {

                let included = 0
                seriesLK.forEach(elm => {
                    if (elm.name.includes(newObj.name) === true) {
                        included++
                    }
                })
                if (included === 0) {
                    let newList = [...seriesLK, newObj]
                    User
                        .findByIdAndUpdate(req.user.id, { "apilists.likes.series": newList })
                        .then(() => res.redirect('/series'))
                        .catch(err => next(err))
                } else {

                    res.redirect('/series')
                }
            }

        })
        .catch(err => next(new Error(err)))



})




module.exports = router