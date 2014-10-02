var mongoose = require('mongoose');
var express = require('express');
var crypto = require('crypto');
var router = express.Router();


/* Login as a User. */
router.post('/login', function(req, res) {
  var users = mongoose.model('users');
  var username = req.body.username;
  var password = req.body.password;
  users.where('username').equals(username).where('password').equals(password).find(function(err, users) {
      if (users && users.length > 0) {
        console.log('found USERS');
        console.log(users);
        res.send(users);
      } else {
        console.log('failed finding users');
        console.log(users);
        res.send(401, 'beat it.');
      }

  })
});


/* Create a User. */
router.post('/create', function(req, res) {
  var users = mongoose.model('users');
  var user = new users();

  user.username = req.body.username;
  user.password = req.body.password;
  user.email = req.body.email;

  user.save(function(err){
    if (err) {
      console.log(err)
      res.send(401, err);
    }else {
      var user_info = {
        _id: user._id,
        username: user.username
      };
      res.send(user_info);
    };
  });
});


/* Get All Username. */
router.get('/', function(req, res) {
  var users = mongoose.model('users');
  users.find({}, 'username',function(err, users) {
    console.log(users);
    if (err)
      {res.send(err)}
    else{
      res.send(users)
    }
  })
});



module.exports = router;
