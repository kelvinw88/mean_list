var mongoose = require('mongoose');
var express = require('express');
var crypto = require('crypto');
var router = express.Router();


/* GET Projects page. */
router.post('/login', function(req, res) {

  var users = mongoose.model('users');
  var username = req.body.username;
  var password = req.body.password;

  users.where('username').equals(username).find(function(err, users) {
    res.send(users);
  })
});

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
