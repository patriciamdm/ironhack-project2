const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TVshowSch = new Schema({
    title: String,
    poster_path: String,
    overview: String,
    first_air_date: Date,
    vote_average: Number,
    popularity: Number
}, { timestamps: true })

module.exports = mongoose.model('TVshows', TVshowSch)

