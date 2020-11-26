<!-- ![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png) -->

# Ironhack Project #2 | bingewapp

## Introduction

Our web app is created to provide a place were the user can have all their favourite movies, series, actors and directors information in one place. They will be able to add content to their Watchlist, to their Favourites list as well as give ratings and comments and send email recomendations to their friends.

#### Authors:

Jordi Boronat & Patricia Muñoz

#### Thanks to:

- Teacher: Germán Alvarez
- TAs: Belen Olias, Enrique Montaño & Jon Arechalde
- Project Manager: Unknown

#### Technologies used:

- HTML & Handlebars, CSS & SASS
- JavaScript (ES6)
- Express:
    MongoDB, Mongoose, Bcrypt, Passport


## Requirements

We will be working with stabisled endpoints, models and a 3rd party API for this project.

### Endpoints

 | Path        | Method           | JSON response  |
  | ------------- | ------------- | ------------- |
  | `/`  | GET | Welcome page  |
  | `/movies` | GET | All movies index  |
  | `/series` | GET | All series index  |
  | `/actors` | GET | All actors index  |
  | `/directors` | GET | All directors index  |
  | `/movies?id=` | GET | Movie details page  |
  | `/movies?id=` | POST | Add movie to user's lists |
  | `/series?id=` | GET | Series details page  |
  | `/series?id=` | POST | Add series to user's lists  |
  | `/actors?id=` | GET | Actor details page  |
  | `/directors?id=` | GET | Director details page  |
  | `/login` | GET | Log in form  |
  | `/login` | POST | Send log in form  |
  | `/signup` | GET | Sign up form  |
  | `/signup` | POST | Send sign up form  |
  | `/logout` | GET | Send log out action  |
  | `/profile` | GET | User's profile  |
  | `/profile/edit?id=` | GET | Edit user's profile form  |
  | `/profile/edit?id=` | POST | Send edited user's profile form  |
  | `/profile/delete?id=` | GET | Delete user's profile page  |
  | `/profile/delete?id=` | POST | Confirm user delete  |
  | `/profile/likes` | GET | User's liked content index  |
  | `/profile/likes/remove?content=&id=` | POST | Remove movie/serie from likes list  |
  | `/profile/seen` | GET | User's seen content index  |
  | `/profile/seen/remove?content=&id=` | POST | Remove movie/serie from seen list  |
  | `/profile/watchlist` | GET | User's watchlist index  |
  | `/profile/watchlist/remove?content=&id=` | POST | Remove movie/serie from watchlist  |


### Models

In `models` folder we have several mdeols to be used:

- The User with these properties:

    ```bash
        - email,
        - password: to be encrypted with bcrypt
        - name,
        - about,
        - role: will be `guest` by default but can also be `admin`
        - img: will be the image src path
        - timestamps
    ```

- The Movie with these properties:


    ```bash
        - title,
        - overview: a small summary of the plot
        - release_date,
        - popularity,
        - vote_average,
        - poster_path: will be the image src path from the poster
        - timestamps
    ```


### API

We will be using the The Movies Data Base API.
The base URL to access all the information in this API is this:
    ```bash
        https://api.themoviedb.org/3
    ```
Also, at the end of every route you'd like to acces you have to include the API key in query format (`?api_key=`) with the number provided by TMDB.

To access different kinds of information we have different routes provided by TMDB which should be added after the base URL and before the API key:
THE MOVIE DATA BASE: base URLs

To access <b>movies</b>
- For a particular movie details: /movie/`<movie_id>`
- For a particular movie credits: /movie/`<movie_id>`/credits

To access <b>series</b>
- For a particular series details: /tv/`<serie_id>`
- For a particular movie credits: /tv/`<serie_id>`/credits

To access <b>actors</b> and <b>directors</b>
- For a particular person's data: /person/`<person_id>`
- For a particular person's movies credits: /person/`<person_id>`/movie_credits
- For a particular person's series credits: /person/`<person_id>`/tv_credits

To access <b>genres</b>
- For all movies possible genres: /genre/movie/list
- For all series possible genres: /genre/tv/list

To access <b>top ratings</b> (these lists update daily)
- For top rated movies: movie/top_rated
- For top rated series: tv/top_rated

To access <b>populars</b> (these lists update daily)
- For popular movies: movie/popular
- For popular series: tv/popular

To <b>discover</b> content by different type of data like average rating, number of votes, genres and certifications
- For movies: /discover/movie
- For series: /discover/tv

To access <b>images</b> a modified route is used, where the fist parameter refers to the size of the image you'd like to obtain and the second to path of the image you are looking for.
```bash
Link: https://image.tmdb.org/t/p/<w300>/<image_path>
```
