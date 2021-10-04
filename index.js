const express = require('express'),
      morgan = require('morgan'),
      bodyParser = require("body-parser");

const {movies,users} = require("./data");

const app = express();

app.use(express.json());

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