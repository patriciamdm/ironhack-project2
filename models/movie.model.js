const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSch = new Schema({
    title: String,
    poster_path: String,
    overview: String,
    genres: [String],
    release_date: Date,
    vote_average: Number,
    popularity: Number,
    img: String
}, { timestamps: true })

module.exports = mongoose.model('Movie', movieSch)


