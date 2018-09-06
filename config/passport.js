const JwtStrategy = require('passport-jwt').Strategy; //A Passport strategy for authenticating with a JSON Web Token.
const ExtractJwt = require('passport-jwt').ExtractJwt; //factory functions that return a new extractor configured with the given parameters.
const mongoose = require('mongoose'); // for schemas
const User = mongoose.model('users'); // users model
const keys = require('../config/keys'); //keys

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); //Looks for the JWT in the authorization header with the scheme 'bearer'
opts.secretOrKey = keys.secretOrKey; //for verifying the token's signature.

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => { // jwt_payload is an object literal containing the decoded JWT payload.
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};