const mongoose = require('mongoose')
const Movie = require('../models/movie.model')

const dbName = 'ironhack-project2'

mongoose.connect(`mongodb://localhost/${dbName}`)

// const baseUsers = [{
//     email: 'patrimdm96@gmail.com',
//     password: '',
//     name: 'Patricia'
//     about: 'Ironhacker',
//     role: 'admin'
// },
// {
//     email: 'jordi.b.arevalo@gmail.com',
//     password: '',
//     name: 'Jordi',
//     about: 'A ver pelis',
//     role: 'admin'
// }]

// User.create(baseUsers)
//     .then(data => {
//         console.log(data)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log(err))

const movies = [{
    title: "Schindler's List",
    poster_path: String,
    overview: "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
    release_date: "1993-11-30",
    vote_average: 8.6,
    popularity: 35.3
}, {
    title: "The Godfather",
    poster_path: String,
    overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    release_date: "1972-03-14",
    vote_average: 8.7,
    popularity: 44.667
    }]




Movie.create(movies)
    .then(data => {
        console.log(data)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))

   
     



    //   title: "Whiplash",
    //       poster_path: "/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
    //       overview: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
    //       release_date: "2014-10-10",
    //       vote_average: 8.29,
    //       popularity: 10.776056

    //   title: "Spirited Away",
    //       poster_path: "/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
    //       overview:"Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",
    //       release_date: "2001-07-20",
    //       vote_average: 8.15,
    //       popularity: 10.776056
    //   title: "Spirited Away",
    //       poster_path: "/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
    //       overview: "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",
    //       release_date: "2001-07-20",
    //       vote_average: 8.15,
    //       popularity: 10.776056