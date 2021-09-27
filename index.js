const express = require('express');
const app = express();

let top10Movies = [
    {
        title: 'Amadeus'
    },
    {
        title: 'Citizen Kane'
    },
    {
        title: 'Raging Bull'
    },
    {
        title: 'Mean Streets'
    },
    {
        title: 'Once Upon a Time In America'
    },
    {
        title: 'Scent of a Woman'
    },
    {
        title: 'Reservoir Dogs'
    },
    {
        title: 'Casablanca'
    },
    {
        title: 'Casino'
    },
    {
        title: 'Taxi Driver'
    }
];

app.get('/movies', (req, res) => {
    res.json(top10Movies);
});

app.get('/', (req, res) => {
    res.send('Welcome to the movie fan page!')
});

app.use('/documentation', express.static('public'));

// app.get('/documentation', (req, res) => {
//     res.sendFile('public/documentation.html', { root: __dirname });
// });
app.listen(7070, () => {
    console.log('Your app is listening on a port 7070.')
})