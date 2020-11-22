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

// const movies = [{
//     title: "Schindler's List",
//     poster_path: String,
//     overview: "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
//     release_date: "1993-11-30",
//     vote_average: 8.6,
//     popularity: 35.3
// }, {
//     title: "The Godfather",
//     poster_path: String,
//     overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
//     release_date: "1972-03-14",
//     vote_average: 8.7,
//     popularity: 44.667
// },
// {
//     title: "Whiplash",
//     poster_path: "/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
//     overview: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
//     release_date: "2014-10-10",
//     vote_average: 8.29,
//     popularity: 10.776056
// },
// {
//     title: "Spirited Away",
//     poster_path: "/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
//     overview: "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",
//     release_date: "2001-07-20",
//     vote_average: 8.15,
//     popularity: 10.776056
// }]




// Movie.create(movies)
//     .then(data => {
//         console.log(data)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log(err))



const TVshow = require('../models/TVshow.model')

const TVshows = [{
    title: "Game of Thrones",
    poster_path: "/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    overview: "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
    first_air_date: "2011-04-17",
    vote_average: 4.8,
    popularity: 369.59
}, {
    title: "Shark",
    poster_path: "/pBUzdT8840AATvyZ7HdPz8Z9evt.jpg",
    overview: "Notorious Los Angeles defense attorney Sebastian Stark becomes disillusioned with his career after his successful defense of a wife-abuser results in the wife's death. After more than a month trying to come to grips with his situation, he is invited by the Los Angeles district attorney to become a public prosecutor so he can apply his unorthodox-but-effective talents to putting guilty people away instead of putting them back on the street.",
    first_air_date: "2006-09-21",
    vote_average: 0,
    popularity: 0
}, {
    title: "Shaquille",
    poster_path: null,
    overview: "Shaquille was a 2005 series on ESPN featuring NBA center Shaquille O'Neal. The television show ran six episodes, running before each game of the 2005 Western Conference Finals and before Game One of the NBA Finals. The show ran about 30 minutes. The television show followed O'Neal on and off the court. He discussed his thoughts on former teammate Kobe Bryant, his determination on winning an NBA championship with his first season on the Miami Heat, and more. The ratings of the mini-series were so high that a DVD of the original six episodes was released on January 31, 2006, titled Shaq TV: The Reality Series.",
    release_date: "1972-03-14",
    vote_average: 4.7,
    popularity: 0.5
}, {
    title: "Hope and Glory",
    poster_path: "/9pJfV7chUj5zyqfzfd9UHXBk1vJ.jpg",
    overview: `Hope and Glory is a BBC television drama about a comprehensive school struggling with financial, staffing and disciplinary problems, and faced with closure. It starred Lenny Henry as maverick "Superhead" Ian George, enlisted to turn around the school's fortunes. It was created by Lucy Gannon, who had previously created Soldier Soldier, and was inspired by a real head teacher named William Atkinson.`,
    release_date: "1972-03-14",
    vote_average: 6.7,
    popularity: 25.5
}]


TVshow.create(TVshows)
    .then(data => {
        console.log(data)
        mongoose.connection.close()
    })
    .catch(err => console.log(err))