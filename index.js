const express = require('express'),
      morgan = require('morgan'),
      bodyParser = require("body-parser");

const {movies,users} = require("./data");

const app = express();

app.use(bodyParser.json());

// Using the Morgan middleware library to log all requests
app.use(morgan('common'));

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

app.get('/genres', (req, res) => {
    res.json(genres.filter((genre) => 
    {return genre.name === req.params.name}));
});

// Show all users
app.get('/users/all', (req, res) => {
    res.send(users);
});

// Allowing new users to register
app.post('/users/register', (req, res) => { 
    users.push(req.body);
    res.send('Registeration Successful!');
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