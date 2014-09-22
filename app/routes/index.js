var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Projects page. */
router.get('/projects', function(req, res) {
  mongoose.model('projects').find(function(err,projects){
    res.send(projects)
  });
});

/* GET Tasks page. */
router.get('/tasks', function(req, res) {
  mongoose.model('tasks').find(function(err,tasks){
    mongoose.model('tasks').populate(tasks,{path: 'project'},function(err,tasks){
      res.send(tasks);
    })
  });
});


module.exports = router;
