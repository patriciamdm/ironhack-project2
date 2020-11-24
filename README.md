<!-- ![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png) -->

# Ironhack Project #2 | bingewapp

## Introduction

Our web app is created to provide a place were the user can have all their favourite movies, series, actors and directors information in one place. They will be able to add content to their Watchlist, to their Favourites list as well as give ratings and comments and send email recomendations to their friends.

#### Authors:

Jordi Boronat & Patricia Muñoz

#### Thanks to:

- Teacher: Germán Alvarez
- TAs: Belen Olias, Enrique Montaño & Jon
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
  | `/series?id=` | GET | Series details page  |
  | `/actors?id=` | GET | Actor details page  |
  | `/directors?id=` | GET | Director details page  |
  | `/login` | GET | Log in form  |
  | `/login` | POST | Send log in form  |
  | `/signup` | GET | Sign up form  |
  | `/signup` | POST | Send sign up form  |
  | `/profile` | GET | User's profile  |
  | `/profile/edit?id=` | GET | Edit user's profile form  |
  | `/profile/edit?id=` | POST | Send edited user's profile form  |
  | `/profile/delete?id=` | GET | Delete user's profile  |
  | `/profile/likes` | GET | User's liked content index  |
  | `/profile/seen` | GET | User's seen content index  |
  | `/profile/watchlist` | GET | User's watchlist index  |


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