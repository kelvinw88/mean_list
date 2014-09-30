var mongoose = require('mongoose');
var express = require('express');
var passport = require('passport');
var router = express.Router();


/* Login as a User. */
// router.post('/login', function(req, res) {
//
//   var users = mongoose.model('users');
//   var username = req.body.username;
//   var password = req.body.password;
//
//   users.where('username').equals(username).find(function(err, users) {
//     users.where('password').equals(password).find(function(err, users) {
//       res.send(users);
//     })
//   })
// });


router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log("user API");

    res.redirect('/users/' + req.user.username);
  });


/* Create a User. */
router.post('/create', function(req, res) {
  var users = mongoose.model('users');
  var user = new users();

  user.username = req.body.username;
  user.password = req.body.password;
  user.email = req.body.email;

  user.save(function(err){
    if (err)
      res.send(err);
    res.send(user._id);
  })
});


module.exports = router;
