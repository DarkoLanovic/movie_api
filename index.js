const express = require('express'),
      morgan = require('morgan'),
      bodyParser = require("body-parser"),
      mongoose =require('mongoose');

const {movies,users,genres,directors} = require("./data");

// This will allow REST API to perform CRUD operations on MongoDB data
const Models = require('./models.js');
const Movies = Models.Movie;
const Users = Models.User;
// Allows Mongoose to connect to that database so it can perform CRUD operations on the documents it contains from within your REST API
mongoose.connect('mongodb://localhost:27017/movie_apiDB', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Using the Morgan middleware library to log all requests
app.use(morgan('common'));



///////////// CRUD OPERATIONS STARTS /////////////

// Reguest for returning message
app.get('/', (req, res) => {
    res.send('Welcome to the movie fun page!');
})

// Request for returning the JSAON movie data
app.get('/movies', (req, res) => {
    movies.push(req.body);
    res.json(movies);
});

// Returning data about single movie
app.get('/movies/title/:title', (req, res) => {
    res.json(movies.find((movie) =>
      { return movie.title === req.params.title }));
  });

// Return data about a genre
app.get('/movies/genre/:genre', (req, res) => {
    res.json(movies.filter((movie) =>
    { return movie.genre === req.params.genre}));
});

// Return data about a director by name
app.get('/movies/director/:director', (req,res) => {
    res.json(movies.filter((movie) => 
    { return movie.director === req.params.director}));
});

// Return data about genre
app.get('/genres/:name', (req, res) => {
    res.json(genres.find((genre) => 
    {return genre.name === req.params.name}));
});

// Return data about director
app.get("/directors/:name", (req, res) => {
    res.json(directors.find((director) => 
    {return director.name === req.params.name}));
});

// Show all users
app.get('/users/all', (req, res) => {
    res.send(users);
});



//  ALLOWIND NEW USER TO REGISTERAll
app.post('/users', (req, res) => { 
    Users.findOne({ Username: req.body.Username})
      .then((user) => {
          if(user) {
            return res.status(400).send(req.body.Username + 'already exist! Try another name, please.');
          } else {
              Users
                .create({
                    Username: req.body.Username,
                    Password: req.body.Password,
                    Email: req.body.Email,
                    Birthday: req.body.Birthday
                })
                .then((user) => {res.status(201).json(user) })
                .catch((error) => {
                    console.error(error);
                    res.status(500).send('Error:' + error);
                })
          }

      })
      .catch((error) => {
          console.error(error);
          res.status(500).send('Error: ' + error);
      });

    });




// Allowing users to update their user info
app.put('/users/update/:id', (req, res) => {
    let userId = users.find((user) => user.id === req.params.id);
    res.send('Changes made successfully!');
});

// Allowing users to add a movie to their list of favorite movies
app.post('/users/addfav/:id', (req, res) => {
    const userId = users.find((user) => user.id === req.params.id);
    res.send('Favorite Movie was successfullu added!');
});

// Allowing users to remove a movie from their list of favorites movies
app.delete('/users/delfav/:id/:title', (req, res) => {
    // const userId = users.find((user) => user.id === req.params.id);
    // const fav = userId.favMovies.filter((movie) => movie.title != req.params.title);
    // userId.favMovies = [fav];
    // // res.send(userId);
    res.send('Movie was successfully removed!');
});

// Allowing existing users to deregister
app.delete('/users/deregister/:id', (req, res) => {
    users.filter((user) => user.id != req.params.id);
    res.send('User was successfully deregister!');
});

app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something is wrong!')
});

app.listen(7070, () => {
    console.log('Your app is listening on a port 7070.')
})