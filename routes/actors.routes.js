const express = require('express')
const router = express.Router()

const apiHandler = require('../public/javascripts/api-handler')


const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false


//ACTORS

router.get('/', (req, res, next) => {

    apiHandler
        .get(`/person/popular?api_key=95ad659b54a1464fdb415db2270f7402`)
        .then(popularActors => {
            const allActors = popularActors.data.results
            res.render('data/actors', { allActors, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(new Error(err)))

})

//SEARCH
router.post('/', (req, res, next) => {

    const { search } = req.body
    const searchCleaned = search.replace(/\s/g, '%20')


    apiHandler
        .get(`/search/person?api_key=95ad659b54a1464fdb415db2270f7402&query=${searchCleaned}`)
        .then(search => {
            const searchResults = search.data.results
            res.render('data/actors', { searchResults, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(new Error(err)))

})

//ACTOR DETAILS

router.get('/:id', (req, res, next) => {

    let thisActor

    apiHandler
        .get(`/person/${req.params.id}?api_key=95ad659b54a1464fdb415db2270f7402`)
        .then(actor => thisActor = actor.data)
        .then(() => apiHandler.get(`/person/${req.params.id}/movie_credits?api_key=95ad659b54a1464fdb415db2270f7402`))
        .then(actorCredits => {

            const actorMovies = actorCredits.data.cast
            const orderedMovies = actorMovies.sort((a, b) => {
                a.popularity > b.popularity ? -1 : null
                a.popularity < b.popularity ? 1 : null
                return 0
            })
            const topPopularMovies = orderedMovies.splice(0, 16)

            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let birthDate
            if (thisActor.birthday) {
                const birthday = thisActor.birthday
                birthDate = {
                    day: birthday.slice(8),
                    month: months[parseInt(birthday.slice(5, 7))],
                    year: birthday.slice(0, 4)
                }
                res.render('data/actor-details', { thisActor, topPopularMovies, birthday: birthDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
            } else if (thisActor.deathday) {
                const deathday = thisActor.deathday
                const deathDate = {
                    day: deathday.slice(8),
                    month: months[parseInt(deathday.slice(5, 7), 10)],
                    year: deathday.slice(0, 4)
                }
                res.render('data/actor-details', { thisActor, topPopularMovies, birthday: birthDate, deathday: deathDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
            } else {
                res.render('data/actor-details', { thisActor, topPopularMovies, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
            }
        })
        .catch(err => next(new Error(err)))
})


module.exports = router

