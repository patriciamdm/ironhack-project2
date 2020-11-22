const mongoose = require('mongoose')
const Schema = mongoose.Schema

const seriesSch = new Schema({
    title: String,
    poster_path: String,
    overview: String,
    first_air_date: Date,
    vote_average: Number,
    popularity: Number,
    img: String
}, { timestamps: true })

module.exports = mongoose.model('series', seriesSch)

