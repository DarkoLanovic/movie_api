const express = reqiire('express');
const app = express;

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
    res.jsnon(top10Movies);
});