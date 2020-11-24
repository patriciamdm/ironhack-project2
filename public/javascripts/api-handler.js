
// const axios = require('axios')


class APIhandler {
    constructor() {
        console.log('API accessed successfully')

        this.axiosApp = axios.create({
            baseURL: "https://api.themoviedb.org/3"
        })
    }
    //MOVIES
    getMovie = (movieId) => this.axiosApp.get(`/movie/${movieId}?api_key=95ad659b54a1464fdb415db2270f7402`)
    getMovieCredits = (movieId) => this.axiosApp.get(`/movie/${movieId}/credits?api_key=95ad659b54a1464fdb415db2270f7402`)

    //SERIES
    getSerie = (serieId) => this.axiosApp.get(`/tv/${serieId}/credits?api_key=95ad659b54a1464fdb415db2270f7402`)
    getSerieCredits = (serieId) => this.axiosApp.get(`/tv/${serieId}/credits?api_key=95ad659b54a1464fdb415db2270f7402`)

    //PERSON
    getPerson = (personId) => this.axiosApp.get(`/person/${personId}?api_key=95ad659b54a1464fdb415db2270f7402`)
    //Credits: Where he/she has worked
    getPersonMoviesCredits = (personId) => this.axiosApp.get(`/person/${personId}/movie_credits?api_key=95ad659b54a1464fdb415db2270f7402`)
    getPersonTvCredits = (personId) => this.axiosApp.get(`/person/${personId}/tv_credits?api_key=95ad659b54a1464fdb415db2270f7402`)

    //List of genres
    getMoviesGenres = () => this.axiosApp.get(`/genre/movie/list?api_key=95ad659b54a1464fdb415db2270f7402`)
    getTvGenres = () => this.axiosApp.get(`/genre/tv/list?api_key=95ad659b54a1464fdb415db2270f7402`)

    //Discover movies by different types of data
    discoverMovies = () => this.axiosApp.get(`/discover/movie?api_key=95ad659b54a1464fdb415db2270f7402`)
    discoverSeries = () => this.axiosApp.get(`/discover/tv?api_key=95ad659b54a1464fdb415db2270f7402`)

    //Popular: List of the current popular movies on IMDB
    getPopularMovies = () => this.axiosApp.get(`/movie/popular?api_key=95ad659b54a1464fdb415db2270f7402`)
    getPopularSeries = () => this.axiosApp.get(`/tv/popular?api_key=95ad659b54a1464fdb415db2270f7402`)
    getPopularSeries = () => this.axiosApp.get(`/person/popular?api_key=95ad659b54a1464fdb415db2270f7402`)

    //Top rated movies/series
    getTopRatedMovies = () => this.axiosApp.get(`/movie/top_rated?api_key=95ad659b54a1464fdb415db2270f7402`)
    getTopRatedSeries = () => this.axiosApp.get(`/tv/top_rated?api_key=95ad659b54a1464fdb415db2270f7402`)

}


