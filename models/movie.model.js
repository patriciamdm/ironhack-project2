const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSch = new Schema({
    title: {
        type: String,
        required: true
    },
    poster_path: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: false
    },
    vote_average: {
        type: Number,
        required: false
    },
    popularity: {
        type: Number,
        required: false
    },
    genres: {
        type: [String],
        required: true,
        default: 'unknown',
        enum: ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western', 'unknown']
    },
    tagline: {
        type: String,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Movie', movieSch)


