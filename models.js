const mongoose = require('mongoose');



let movieShema = mongoose.Schema({
    Title: {type: String, required: true},
    Descrption: {type: String, required:true},
    Genre: {
        Name: String,
        Descrption: String
    },
    Director: {
        Name: String,
        Bio: String,
        Birth: Date,
        Death: Date
    },
    Actors: String,
    ImagePath: String,
    Reatured: Boolean

});

let userShema = mongoose.Schema({
    Username: {type: String, required: true},
    Password: {type: String, required:true},
    Email: {type: String, required: true},
    Birthday: Date,
    FavoriteMovies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movie'}]
});

// Creating the models(This will create collections called “db.movies” and “db.users” within the MongoDB)
let Movie = mongoose.model('Movie', movieShema);
let User = mongoose.model('User', userShema);


// EXPORTING THE MODELS
module.exports.Movie = Movie;
module.exports.User = User;
