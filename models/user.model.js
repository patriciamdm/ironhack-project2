const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSch = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false,
        default: 'username@email'
    },
    name: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: false,
        default: 'Something about you'
    },
    role: {
        type: String,
        enum: ['admin', 'guest'],
        default: 'guest',
        required: true
    },
    img: {
        type: String,
        required: false,
    },
    apilists: {
        watchlist: {
            movies: [{
                db_id: String,
                title: String,
                poster_path: String
            }],
            series: [{
                db_id: String,
                name: String,
                poster_path: String
            }]
        },
        seen: { 
            movies: [{
                db_id: String,
                title: String,
                poster_path: String
            }],
            series: [{
                db_id: String,
                name: String,
                poster_path: String
            }]
        },
        likes: {
            movies: [{
                db_id: String,
                title: String,
                poster_path: String
            }],
            series: [{
                db_id: String,
                name: String,
                poster_path: String
            }]
        }
    },
    seedslists: {
        watchlist: {
            movies: [{
                type: Schema.Types.ObjectId,
                ref: 'Movie'
            }], series: [{
                type: Schema.Types.ObjectId,
                ref: 'Series'
            }]
        },
        seen: {
            movies: [{
                type: Schema.Types.ObjectId,
                ref: 'Movie'
            }], series: [{
                type: Schema.Types.ObjectId,
                ref: 'Series'
            }]
        },
        likes: {
            movies: [{
                type: Schema.Types.ObjectId,
                ref: 'Movie'
            }], series: [{
                type: Schema.Types.ObjectId,
                ref: 'Series'
            }]
        }
    }
}, { timestamps: true })

module.exports = mongoose.model('User', userSch)