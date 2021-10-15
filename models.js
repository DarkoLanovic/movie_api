const mongoose = require('mongoose');

// Creating the models(This will create collections called “db.movies” and “db.users” within the MongoDB)
let Movie = mongoose.model('Movie', movieShema);
let User = mongoose.model('User', userShema);


let movieShema = mongoose.Schema({
    Title: {type: String, require: true},
    Descrption: {type: String, require:true},
    Genre: {
        Name: String,
        Descrption: String
    },
    Director: {
        Name: String,
        Bio: String
    },
    Actors: [String],
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

let Movie = mongoose.model('Movie', movieShema);
let User = mongoose.model('User', userShema);

module.exports.Movie = Movie;
module.exports.User = User;
