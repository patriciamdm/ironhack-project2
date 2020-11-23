
// const axios = require('axios')


class APIhandler {
    constructor() {
        console.log('API accessed successfully')

        this.axiosApp = axios.create({
            baseURL: "https://api.themoviedb.org/3"
        })
    }

    getTopRatedMovies = () => this.axiosApp.get(`/movie/top_rated?api_key=95ad659b54a1464fdb415db2270f7402`)

}


