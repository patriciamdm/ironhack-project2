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

//PARTIALS
// const hbs = require('hbs');
// const path = require('path');


// const app = express();
// app.use(express.static('public'))

// hbs.registerPartials(`${__dirname}/views/partials`)

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');


// app.use(express.static(path.join(__dirname, 'public')));





const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false



//ACTORS

router.get('/', (req, res, next) => {

    Person
        .find({ 'known_for_department': 'Acting' })
        .sort({ popularity: -1 })
        .then(allActors => {
            res.render('data/actors', { allActors, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(err))

})


//SEARCH
router.post('/', (req, res, next) => {

    const { search } = req.body
    const searchCleaned = search.replace(/\s/g, '%20')
    console.log(searchCleaned)

    Person
        .find({ 'known_for_department': 'Acting', 'name': search })
        .sort({ popularity: -1 })
        .then(allActors => {
            res.render('data/actors', { allActors, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(err))

})

//ACTOR DETAILS

router.get('/:id', (req, res, next) => {


    Person
        .findById(req.params.id)
        .then(thisActor => {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const birthDate = {
                day: thisActor.birthday.getDate(),
                month: months[thisActor.birthday.getMonth()],
                year: thisActor.birthday.getFullYear()
            }
            if (thisActor.deathday) {
                const deathDate = {
                    day: thisActor.deathday.getDate(),
                    month: months[thisActor.deathday.getMonth()],
                    year: thisActor.deathday.getFullYear()
                }
                res.render('data/actor-details', { thisActor, birthday: birthDate, deathday: deathDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
            } else {
                res.render('data/actor-details', { thisActor, birthday: birthDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
            }
        })
        .catch(err => next(err))
})



module.exports = router

