### movie_api

### Description

Movie API for managing movie database.

Server-side component of a “movies” web application. The web application will provide users with access to information about different movies, directors, and genres. Users will be able to sign up, update their personal information, and create a list of their favorite movies.

### Essential Features

    Return a list of all movies to the user
    Return data (description, genre, director, image URL, whether it’s featured or not) about a single movie by title to the user
    Return data about a genre (description) by name/title (e.g., “Thriller”)
    Return data about a director (bio, birthdate) by name
    Allow new users to register
    Allow users to update their user info (username, password, email, date of birth)
    Allow users to add a movie to their list of favorites
    Allow users to remove a movie from their list of favorites
    Allow existing users to deregister

### Technical Requirements

    The API must be a Node.js and Express application.
    The API must use REST architecture, with URL endpoints corresponding to the data operations listed above
    The API must use at least three middleware modules, such as the body-parser package for reading data from requests and morgan for logging.
    The API must use a “package.json” file.
    The database must be built using MongoDB.
    The business logic must be modeled with Mongoose.
    The API must provide movie information in JSON format.
    The JavaScript code must be error-free.
    The API must be tested in Postman.
    The API must include user authentication and authorization code.
    The API must include data validation logic.
    The API must meet data security regulations.
    The API source code must be deployed to a publicly accessible platform like GitHub.
    The API must be deployed to Heroku.


### Endpoints

/movies
/movies/[title]
/genre/[name]
/director/[name]
/users
/users/[username]
/users/username/FavoriteMovies/[movieID]
/user/username/favmovies/[movieID]

### Dependencies

-  "bcrypt": "^5.0.1",
-  "body-parser": "^1.19.0",
-  "cors": "^2.8.5",
-  "express": "^4.17.1",
-  "express-validator": "^6.12.1",
-  "jsonwebtoken": "^8.5.1",
-  "mongoose": "^6.0.6",
-  "morgan": "^1.10.0",
-  "passport": "^0.4.1",
-  "passport-jwt": "^4.0.0",
-  "passport-local": "^1.0.0",
-  "uuid": "^8.3.2"

### devDependencies
-  "eslint": "^7.32.0",
-  "nodemon": "^2.0.14"

### Tecnologies:

- Node
- Express
- MongoDB
- Mongoose
- MongoDB Compass
- Heroku

**To run app**
`npm start`
