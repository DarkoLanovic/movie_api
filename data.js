const { application } = require("express");

const users = [
    {
        Usrname: "...",
        Password: "...",
        Email: "...",
        Birthday: "...",
        FavoriteMovies: []
      },
      {
        Usrname: "...",
        Password: "...",
        Email: "...",
        Birthday: "...",
        FavoriteMovies: []
      },
      {
        Usrname: "...",
        Password: "...",
        Email: "...",
        Birthday: "...",
        FavoriteMovies: []
      }
];


const movies = [
    {
        title: "Amadeus",
        Descrption: "...",
        Genre: {
            Name: "...",
            Descrption: "..."
        },
        Director: {
            Name: "...",
            Bio: "...",
            Birth: "...",
            Death: "..."
        },
        Actors: "...",
        ImagePath: "...",
        Reatured: "..."
    },
    {
        title: "Citizen Kane",
        Descrption: "...",
        Genre: {
            Name: "...",
            Descrption: "..."
        },
        Director: {
            Name: "...",
            Bio: "...",
            Birth: "...",
            Death: "..."
        },
        Actors: "...",
        ImagePath: "...",
        Reatured: "..."
    },
    {
        title: "Raging Bull",
        Descrption: "...",
        Genre: {
            Name: "...",
            Descrption: "..."
        },
        Director: {
            Name: "...",
            Bio: "...",
            Birth: "...",
            Death: "..."
        },
        Actors: "...",
        ImagePath: "...",
        Reatured: "..."
    },
    {
        title: "Mean Streets",
        Descrption: "...",
        Genre: {
            Name: "...",
            Descrption: "..."
        },
        Director: {
            Name: "...",
            Bio: "...",
            Birth: "...",
            Death: "..."
        },
        Actors: "...",
        ImagePath: "...",
        Reatured: "..."
    },
    {
        title: "Once Upon a Time In America",
        Descrption: "...",
        Genre: {
            Name: "...",
            Descrption: "..."
        },
        Director: {
            Name: "...",
            Bio: "...",
            Birth: "...",
            Death: "..."
        },
        Actors: "...",
        ImagePath: "...",
        Reatured: "..."
    },
    {
        title: "Scent of a Woman",
        Descrption: "...",
        Genre: {
            Name: "...",
            Descrption: "..."
        },
        Director: {
            Name: "...",
            Bio: "...",
            Birth: "...",
            Death: "..."
        },
        Actors: "...",
        ImagePath: "...",
        Reatured: "..."
    },
    {
        title: "Reservoir Dogs",
        Descrption: "...",
        Genre: {
            Name: "...",
            Descrption: "..."
        },
        Director: {
            Name: "...",
            Bio: "...",
            Birth: "...",
            Death: "..."
        },
        Actors: "...",
        ImagePath: "...",
        Reatured: "..."
    },
    {
        title: "Casablanca",
        Descrption: "...",
        Genre: {
            Name: "...",
            Descrption: "..."
        },
        Director: {
            Name: "...",
            Bio: "...",
            Birth: "...",
            Death: "..."
        },
        Actors: "...",
        ImagePath: "...",
        Reatured: "..."
    },
    {
        title: "Casino",
        Descrption: "...",
        Genre: {
            Name: "...",
            Descrption: "..."
        },
        Director: {
            Name: "...",
            Bio: "...",
            Birth: "...",
            Death: "..."
        },
        Actors: "...",
        ImagePath: "...",
        Reatured: "..."
    },
    {
        title: "Taxi Driver",
        Descrption: "...",
        Genre: {
            Name: "...",
            Descrption: "..."
        },
        Director: {
            Name: "...",
            Bio: "...",
            Birth: "...",
            Death: "..."
        },
        Actors: "...",
        ImagePath: "...",
        Reatured: "..."
    }
];

const genres = [
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
        name: "orson welles",
        DOB: "1915-1985"
    },
    {
        name: "martin scorsese",
        DOB: "1942"
    },
    {
        name: "ingmar bergman",
        BOB: "1918-2007"
    },
    {
        name: "stanley kubrick",
        DOB: "1928-1999"
    },
    {
        name: "akira kurosava",
        DOB: "1910-1998"
    }
];
      
module.exports = {
    users,
    movies,
    genres,
    directors
}


