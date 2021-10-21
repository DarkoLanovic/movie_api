const express = require('express'),
      morgan = require('morgan'),
      uuid = require('uuid'),
      mongoose = require('mongoose');

const app = express();


// This will allow REST API to perform CRUD operations on MongoDB data
const models = require('./models.js');

const Movies = models.Movie;
const Users = models.User;


// Allows Mongoose to connect to database(ONLINE MongoDB Compass - cluster) so it can perform CRUD operations on the documents it contains from within REST API
mongoose.connect('mongodb+srv://admin:Bokelj88@cluster0.bj6o9.mongodb.net/movie_apiDB?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true});


  app.use(express.json());
app.use(express.urlencoded({extended: true}));


// The "app" argument we are passing here ensures that Express is available in “auth.js” file as well.
 let auth = require('./auth')(app); 

const passport = require('passport');
require('./passport');

// Using the Morgan middleware library to log all requests
app.use(morgan('common'));



///////////// CRUD OPERATIONS STARTS /////////////

// REQUEST FOR RETURNING MESSAGE
app.get('/', (req, res) => {
    res.send('Welcome to the movie fun page!');
})

// GET ALL JASON MOVIES DATA
app.get('/movies', passport.authenticate('jwt', { session: false }), (req, res) => {
    Movies.find()
      .then((movies) => {
        res.status(201).json(movies);
      })
      .catch((err) => {
        console.error(err)
        res.status(500).send('Error ' + err);
      });
});

// GET DATA ABOUT SINGLE "MOVIE"
app.get('/movies/:Title', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.findOne({ Title: req.params.Title})
    .then((movie) => {
      res.json(movie);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' +err);
    });
  });

// GET DATA ABOUT A "GENRE"
app.get('/genre/:Name', passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.findOne({ 'Genre.Name': req.params.Name})
    .then((movie) => {
      res.json(movie.Genre);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error ' + err);
    });
});


// GET DATA ABOUT SPECIFIC "DIRECTOT"
app.get("/director/:Name", passport.authenticate('jwt', { session: false }), (req, res) => {
  Movies.findOne({ 'Director.Name': req.params.Name})
    .then((movie) => {
      res.json(movie.Director);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error ' + err);
    });
});

// GET ALL "USERS"
app.get('/users', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.find()
    .then((users) => {
      res.status(201).json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});

// GET USER BY "Username"
app.get('/users/:Username', passport.authenticate('jwt', { session: false }), (req, res) => {
    Users.findOne({ Username: req.params.Username })
       .then((user) => {
           res.json(user);
       })
       .catch((err) => {
           console.error(err);
           res.status(500).send('Eror: ' + err);
       });
});

//  ALLOWIND NEW USER TO REGISTER 

app.post('/users', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.findOne({ Username: req.body.Username })
    .then((user) => {
      if (user) {
        return res.status(400).send(req.body.Username + 'already exists');
      } else {
        Users
          .create({
            Username: req.body.Username,
            Password: req.body.Password,
            Email: req.body.Email,
            Birthday: req.body.Birthday
          })
          .then((user) =>{res.status(201).json(user) })
        .catch((error) => {
          console.error(error);
          res.status(500).send('Error: ' + error);
        })
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error: ' + error);
    });
});

// ALLOW "USER" TO UPDATE THEIR USER INFO
app.put('/users/:Username', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.findOneAndUpdate({ Username: req.params.Username}, 
      { $set:
        {
          Username:req.body.Username,
          Password: req.body.Password,
          Email: req.body.Email,
          Birthday: req.body.Birthday
        }
      },
      { new: true }, // This line makes sure that the updated document is returned
      (err, updatedUser) => {
        if(err) {
          console.error(err);
          res.status(500).send('Error: ' + err);
        } else {
          res.json(updatedUser);
        }
      });
});

// ALLOWING "USERS" TO ADD A MOVIE TO THEIR "FAVORITE MOVIES' LIST
app.post('/users/:Username/FavoriteMovies/:_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.findByIdAndUpdate({ Username: req.params.Username},
    {
      $push: { FavoriteMovies: req.params._id}
    },
    { new: true },
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error ' + err);
      } else {
        res.json(updatedUser);
      }
    });
});

// ALLOW "USERS" TO REMOVE A MOVIE FROM THEIR "FAVORITE MOVIES" LIST
app.delete('/users/:Username/FavoriteMovies/:MovieID', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.findByIdAndUpdate({ Username: req.params.Username},
    {
      $pull: { FavoriteMovies: req.params.MovieID}
    },
    { new: true },
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error ' + err);
      } else {
        res.json(updatedUser);
      }
    });
});

// ALLOWING EXISTING USER TO DEREGISTER
app.delete('/users/:Username', passport.authenticate('jwt', { session: false }), (req, res) => {
  Users.findOneAndRemove({Username: req.params.Username})
    .then((user) => {
      if (!user) {
        res.status(400).send(req.params.Username + ' was not found');
      } else {
        res.status(200).send(req.params.Username + ' was deleted.');
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error: ' + err);
    });
});



app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something is wrong!')
});

app.listen(7070, () => {
    console.log('Your app is listening on a port 7070.')
})