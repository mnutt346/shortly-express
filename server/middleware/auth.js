const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  models.Sessions.create()
    .then(success => {
      models.Sessions.get({ id: success.insertId })
        .then(session => {
          req.session = session;
          // console.log('**********THIS ONE*********', res.cookie);
          console.log(req);
          // res.cookie()
          return next();
        })
    })
    .error(err => {
      throw new Error;
    })
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

