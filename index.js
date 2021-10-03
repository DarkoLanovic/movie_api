const express = require('express'),
      morgan = require('morgan'),
      bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const data = require("./data");
console.log(data);

app.use(morgan('common'));



app.post('/movies', (req, res) => {
    res.json(data.favMovies);
});

// app.delete("/movies/movie/:title", (req, res)=> {
//     res.json(data.favMovies.filter(x => x.title !=  req.params.title))
// });

// app.get("/movies/movie/:title", (req, res)=> {
//     res.json(data.favMovies.find(x => x.title ===  req.params.title))
// });


app.get('/', (req, res) => {
    res.send('Welcome to the movie fan page!')
});

app.post('/movi', (req, res) => {
    data.push(req.body);
    res.json(data);
});

app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something is wrong!')
});

app.listen(7070, () => {
    console.log('Your app is listening on a port 7070.')
})