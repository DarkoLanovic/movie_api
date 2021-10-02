const express = require('express'),
      morgan = require('morgan');

const app = express();
const data =  require("./data");
console.log(data);
app.use(morgan('common'));

// let top10Movies = [
//     {
//         title: 'Amadeus'
//     },
//     {
//         title: 'Citizen Kane'
//     },
//     {
//         title: 'Raging Bull'
//     },
//     {
//         title: 'Mean Streets'
//     },
//     {
//         title: 'Once Upon a Time In America'
//     },
//     {
//         title: 'Scent of a Woman'
//     },
//     {
//         title: 'Reservoir Dogs'
//     },
//     {
//         title: 'Casablanca'
//     },
//     {
//         title: 'Casino'
//     },
//     {
//         title: 'Taxi Driver'
//     }
// ];

app.get('/movies', (req, res) => {
    res.json(data.favMovies);
});

app.delete("/movies/movie/:title", (req, res)=> {
    res.json(data.favMovies.filter(x => x.title !=  req.params.title))
});

app.get("/movies/movie/:title", (req, res)=> {
    res.json(data.favMovies.find(x => x.title ===  req.params.title))
});

app.get('/', (req, res) => {
    res.send('Welcome to the movie fan page!')
});

app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something is wrong!')
});

app.listen(7070, () => {
    console.log('Your app is listening on a port 7070.')
})