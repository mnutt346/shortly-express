const cookie = require('cookie');
const Auth = require('./auth.js');

const parseCookies = (req, res, next) => {
    if (req.headers.cookie === undefined) {

        Auth.createSession(req, res, next);
        return next();
    } else if (req.headers.cookie) {

        let cookies = cookie.parse(req.headers.cookie);
        req.cookies = cookies;
        return next();
    }


};

module.exports = parseCookies;