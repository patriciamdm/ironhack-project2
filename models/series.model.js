const mongoose = require('mongoose')
const Schema = mongoose.Schema

const seriesSch = new Schema({
    name: {
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
    first_air_date: {
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
        enum: ['Action & Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Kids', 'Mystery', 'News', 'Reality', 'Sci-Fi & Fantasy', 'Soap', 'Talk', 'War & Politics', 'Western', 'unknown']
    },
    number_of_episodes: {
        type: Number,
        requiered: false
    },
    number_of_seasons: {
        type: Number,
        requiered: false
    }
}, { timestamps: true })

module.exports = mongoose.model('series', seriesSch)

