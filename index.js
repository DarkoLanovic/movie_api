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
      { return movie.name === req.params.name }));
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

// Get user by name
app.get('/users/:fullname', (req, res) => {
    res.send(users);
  });

// Allowing new users to register
app.post('/users', (req, res) => {
    users.push(req.body);
    res.send('Registeration Successful!');
  });



  



// app.delete("/movies/movie/:title", (req, res)=> {
//     res.json(data.favMovies.filter(x => x.title !=  req.params.title))
// });

// app.get("/movies/movie/:title", (req, res)=> {
//     res.json(data.favMovies.find(x => x.title ===  req.params.title))
// });



app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something is wrong!')
});

app.listen(7070, () => {
    console.log('Your app is listening on a port 7070.')
})