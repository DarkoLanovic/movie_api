const mongoose = require('mongoose');



let movieShema = mongoose.Schema({
    Title: {type: String, require: true},
    Descrption: {type: String, require:true},
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
    Usrname: {type: String, require: true},
    Password: {type: String, require:true},
    Email: {type: String, require: true},
    Birthday: Date,
    FavoriteMovies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movie'}]
});

// Creating the models(This will create collections called “db.movies” and “db.users” within the MongoDB)
let Movie = mongoose.model('Movie', movieShema);
let User = mongoose.model('User', userShema);


// EXPORTING THE MODELS
module.exports.Movie = Movie;
module.exports.User = User;
