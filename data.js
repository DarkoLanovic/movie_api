const { application } = require("express");

const users = [
    {
        id:1,
        fullname: "U",
        pasword: "...",
        email: "...",
        favMovies: [
            {
                title: "Amadeus",
                actors: "...",
                image: "...",
                genre : "...",
                director: "..."
            }] 
      },
      {
        id:2,
        fullname: "...",
        pasword: "...",
        email: "...",
        favMovies: [
            {
                title: "Citizen Kane",
                actors: "...",
                image: "...",
                genre : "...",
                director: "..."
            }] 
      },
      {
        id:3,
        fullname: "...",
        pasword: "...",
        email: "...",
        favMovies: [
            {
                title: "Raging Bull",
                actors: "...",
                image: "...",
                genre : "...",
                director: "..."
            }] 
      }
];


const movies = [
    {
        title: "Amadeus",
        actors: "...",
        image: "...",
        genre: "a",
        director: ""
    },
    {
        title: "Citizen Kane",
        actors: "...",
        genre : "...",
        director: "A"
    },
    {
        title: "Raging Bull",
        actors: "...",
        genre : "...",
        director: "..."
    },
    {
        title: "Mean Streets",
        actors: "...",
        genre : "...",
        director: "..."
    },
    {
        title: "Once Upon a Time In America",
        actors: "...",
        genre : "...",
        director: "..."
    },
    {
        title: "Scent of a Woman",
        actors: "...",
        genre : "...",
        director: "..."
    },
    {
        title: "Reservoir Dogs",
        actors: "...",
        genre : "...",
        director: "..."
    },
    {
        title: "Casablanca",
        actors: "...",
        genre : "...",
        director: "..."
    },
    {
        title: "Casino",
        actors: "...",
        genre : "...",
        director: "..."
    },
    {
        title: "Taxi Driver",
        actors: "...",
        genre : "...",
        director: "..."
    }
];

const genre = [
    {
        name: "action",
        description: "Movie that typically include violence, extended fighting, physical feats, rescues and frantic chases"
    },
    {
        name: "triller",
        description: "Thriller is a genre of fiction, having numerous, often overlapping subgenres. Thrillers are characterized and defined by the moods they elicit, giving viewers heightened feelings of suspense, excitement, surprise, anticipation and anxiety."
    },
    {
        name: "drama",
        description: "Drama is a category of narrative fiction intended to be more serious than humorous in tone."
    },
    {
        name: "comedy",
        description: "Movie in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect."
    },
    {
        name: "romance",
        description: "Romance movies are romantic love stories recorded in visual media for broadcast in theaters and on TV that focus on passion, emotion, and the affectionate romantic involvement of the main characters and the journey that their love takes them through dating, courtship or marriage."
    },
    {
        name: "horror",
        description: "A horror film is one that seeks to elicit fear or disgust in its audience for entertainment purposes."
    },
    {
        name: "animated",
        description: "Movie consisting of a sequence of drawings, each slightly different so that when filmed and run through a projector the figures seem to move."
    }
];

const directors = [
    {
        name: "ORSON WELLES",
        DOB: "1915-1985"
    },
    {
        name: "MARTIN SCORSESE",
        DOB: "1942"
    },
    {
        name: "INGMAR BERGMAN",
        BOB: "1918-2007"
    },
    {
        name: "STANLEY KUBRICK",
        DOB: "1928-1999"
    },
    {
        name: "AKIRA KUROSAVA",
        DOB: "1910-1998"
    }
];
      
module.exports = {
    users,
    movies,
    genre,
    directors
}


