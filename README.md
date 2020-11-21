# ironhack-project2

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