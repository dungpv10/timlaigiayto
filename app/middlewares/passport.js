let JwtStrategy = require('passport-jwt').Strategy;
let ExtractJwt = require('passport-jwt').ExtractJwt;
let _ = require('lodash');


let users = [{
    id: 1,
    password: '123456',
    email: 'user1@tcc.com'
},{
    id: 2,
    password: '123456',
    email: 'user2@tcc.com'
}];




let apiMiddleware = {
    authenticated : () => {
        return (req, res, next) => {
            let jwtOptions = {};
            jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
            jwtOptions.secretOrKey = 'tasmanianDevil';
            let strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
                console.log('payload received', jwt_payload);
                let user = users[_.findIndex(users, {id: jwt_payload.id})];
                if (user) {
                    next(null, user);
                } else {
                    console.log('error');
                    next(null, false);
                }
            });
        }
    }
};


module.exports = apiMiddleware;