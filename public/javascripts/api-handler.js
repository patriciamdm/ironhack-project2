const axios = require('axios')

module.exports = this.axiosApp = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})