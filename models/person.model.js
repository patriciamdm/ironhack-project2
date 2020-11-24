const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personSch = new Schema({
    name: {
        type: String,
        required: true
    },
    profile_path: {
        type: String,
        required: false
    },
    birthday: {
        type: Date,
        required: false
    },
    deathday: {
        type: Date,
        required: false
    },
    biography: {
        type: String,
        required: true
    },
    place_of_birth: {
        type: String,
        required: false
    },
    popularity: {
        type: String,
        required: true
    },
    known_for_department: {
        type: [String],
        required: true,
        enum: ['Acting', 'Directing']
    },
    job: {
        type: String,
        required: true,
        default: 'none',
        enum: ['director', 'none']
    },
}, { timestamps: true })

module.exports = mongoose.model('person', personSch)

