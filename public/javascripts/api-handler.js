const axios = require('axios')

class APIhandler {
    constructor() {
        console.log('API accessed successfully')

        this.axiosApp = axios.create({
            baseURL: "https://api.themoviedb.org/3"
        })
    }

    // const apiKey = process.env.APIkey

    getTopRatedMovies() {
        this.axiosApp.get(`/movie/top_rated?api_key=${process.env.APIkey}`)
    }

}

