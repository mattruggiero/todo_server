const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const keys = require('./keys');
const User = mongoose.model('users');
//DB query
const userFindById = require('../dataBase_functions/query').userFindById;


const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    passport.use(
        new JwtStrategy(opts, async (jwt_payload,done) => {
            try{
                let user = await userFindById(jwt_payload.id);
                if(user) {return done(null,user)}
                return done(null, false);
            }catch (err){
                console.log(error);
                return done(null, false);
            }

        })
    )
}