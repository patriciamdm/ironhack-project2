const express = require('express')
const router = express.Router()


const Person = require('../models/person.model.js')



const isLogged = (req) => req.isAuthenticated() === true
const isNotLogged = (req) => req.isAuthenticated() === false



//DIRECTORS

router.get('/', (req, res, next) => {
    Person
        .find({ 'known_for_department': 'Directing' })
        .sort({ popularity: -1 })
        .then(allDirectors => {
            res.render('data/directors', { allDirectors, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
        })
        .catch(err => next(new Error(err)))
})

//DIRECTOR DETAILS

router.get('/:id', (req, res, next) => {
    Person
        .findById(req.params.id)
        .then(thisDirector => {

            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const birthDate = {
                day: thisDirector.birthday.getDate(),
                month: months[thisDirector.birthday.getMonth()],
                year: thisDirector.birthday.getFullYear()
            }
            if (thisDirector.deathday) {
                const deathDate = {
                    day: thisDirector.deathday.getDate(),
                    month: months[thisDirector.deathday.getMonth()],
                    year: thisDirector.deathday.getFullYear()
                }
                res.render('data/director-details', { thisDirector, birthday: birthDate, deathday: deathDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
            } else {
                res.render('data/director-details', { thisDirector, birthday: birthDate, isLogged: isLogged(req), isNotLogged: isNotLogged(req) })
            }
        })
        .catch(err => next(new Error(err)))
})





module.exports = router

