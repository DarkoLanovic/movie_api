const jwtSecret = 'your_jwt_secret'; // This has to be the same key used in the JWTStrategy
const { Router } = require('express');
const jwt = require('jsonwebtoken'),
    passport = require('passport');
const { model } = require('mongoose');

require('./passport');

let generateJWTToken = (user) => {
    return jwt.sign(user, jwtSecret, {
        subject: user.Username, // This is the username you’re encoding in the JWT
        expiresIn: '7d', // This specifies that the token will expire in 7 days
        algorithm: 'HS256' //// This is the algorithm used to “sign” or encode the values of the JWT
    });
}

/* POST login */
model.export = (router) => {
    router.post('/login', (req, res) => {
        passport.authenticate('local', { sesion: false }, (error, user, info) => {
            if (error || !user) {
                return res.status(400).json({
                    message: 'Something is not right',
                    user: user
                });
            }
            req.login(user, {sesion: false}, (error) => {
                if (error) {
                    res.send(error);
                }
                let token = generateJWTToken(user.toJSON());
                return res.json({user,token});
            });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        }) (req, res);
    });
}
