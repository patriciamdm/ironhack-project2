const express = require('express')
const router = express.Router()

const Movie = require('../models/movie.model')
const Series = require('../models/series.model.js')
const Person = require('../models/person.model.js')
const User = require('../models/user.model')
const axios = require('axios')

const apiHandler = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})



const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false



//ACTORS

router.get('/', (req, res, next) => {


    apiHandler
        .get(`/person/popular?api_key=95ad659b54a1464fdb415db2270f7402`)
        .then(popularActors => {
            const allActors = popularActors.data.results
            console.log(popularActors.data.results)
            res.render('data/actors', { allActors, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(err))
    // Person
    //     .find({ 'known_for_department': 'Acting' })
    //     .sort({ popularity: -1 })
    //     .then(allActors => {
    //         res.render('data/actors', { allActors, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
    //     })
    //     .catch(err => next(err))

})

//ACTOR DETAILS

router.get('/:id', (req, res, next) => {

    apiHandler
        .get(`/person/${req.params.id}?api_key=95ad659b54a1464fdb415db2270f7402`)
        .then(actor => {
            apiHandler
                .get(`/person/${req.params.id}/movie_credits?api_key=95ad659b54a1464fdb415db2270f7402`)
                .then(actorCredits => {
                    const actorMovies = actorCredits.data.cast
                    const orderedMovies = actorMovies.sort((a, b) => {
                        if (a.popularity > b.popularity) {
                            return -1
                        }
                        if (a.popularity < b.popularity) {
                            return 1
                        }
                        return 0
                    })
                    const topPopularMovies = orderedMovies.splice(0, 16)
                    const thisActor = actor.data
                    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    const birthday = thisActor.birthday

                    const birthDate = {
                        day: birthday.slice(8),
                        month: months[parseInt(birthday.slice(5, 7))],
                        year: birthday.slice(0, 4)
                    }
                    if (thisActor.deathday) {
                        const deathday = thisActor.deathday
                        const deathDate = {
                            day: deathday.slice(8),
                            month: months[parseInt(deathday.slice(5, 7), 10)],
                            year: deathday.slice(0, 4)
                        }
                        res.render('data/actor-details', { thisActor, topPopularMovies, birthday: birthDate, deathday: deathDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
                    } else {
                        res.render('data/actor-details', { thisActor, topPopularMovies, birthday: birthDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
                    }


                })
        })


    // Person
    //     .findById(req.params.id)
    //     .then(thisActor => {
    //         const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //         const birthDate = {
    //             day: thisActor.birthday.getDate(),
    //             month: months[thisActor.birthday.getMonth()],
    //             year: thisActor.birthday.getFullYear()
    //         }
    //         if (thisActor.deathday) {
    //             const deathDate = {
    //                 day: thisActor.deathday.getDate(),
    //                 month: months[thisActor.deathday.getMonth()],
    //                 year: thisActor.deathday.getFullYear()
    //             }
    //             res.render('data/actor-details', { thisActor, birthday: birthDate, deathday: deathDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
    //         } else {
    //             res.render('data/actor-details', { thisActor, birthday: birthDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
    //         }
    //     })
    //     .catch(err => next(err))
})



module.exports = router

