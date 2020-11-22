const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSch = new Schema({
    name: String,
    profile_path: String,
    birthday: Date,
    deathday: Date,
    biography: String,
    place_of_birth: String,
    popularity: Number,
    known_for_department: String,
    img: String
}, { timestamps: true })

module.exports = mongoose.model('person', personSch)

