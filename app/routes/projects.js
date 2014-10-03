var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();



/* post Projects page. */
router.post('/', function(req, res) {


  var projects = mongoose.model('projects');
  var project = new projects();

  project.name = req.body.name;
  mongoose.model('users').where('username').equals(req.body.username).find(function(err, user) {
    project.users.push(user[0]._id);
    project.save(function(err) {
      if (err)
        res.send(err);
      mongoose.model('projects').where('users').equals(user[0]._id).find(function(err, projects) {
        console.log(project);
        res.send(projects);
      });
    });
  });



});

/* GET a project. */
router.get('/project/:project_id', function(req, res) {
  var project = mongoose.model('projects');
  project.findById(req.params.project_id, function(err, project) {
    if (err)
      res.send(err);
    res.json(project);
  });
});




/* GET a project wih username. */






/* GET Projects page. */
router.get('/:username', function(req, res) {
  mongoose.model('users').findOne({'username' : req.params.username} , function(err, user) {
    if (user != null) {
      mongoose.model('projects').find({'users' : user._id}, function(err, projects) {
          res.send(projects);
      });
    }
  });

});


/* edit a project. */
router.post('/:project_id', function(req, res) {
  var project = mongoose.model('projects');
  project.findById(req.params.project_id, function(err, project) {

    if (err)
      res.send(err);

    project.name = req.body.name;
    project.users = req.body.users;
    project.save(function(err) {
      if (err)
        res.send(err);
      res.send(project);
    });
  });
});


/* delete a project. */
router.delete('/:project_id', function(req, res) {
  var project = mongoose.model('projects');
  var tasks = mongoose.model('tasks');

project.remove({
  _id: req.params.project_id
}, function(err, project) {
  if (err)
    res.send(err);
  else
  tasks.remove({
    project: req.params.project_id
  }, function(err, tasks) {
    if (err)
      res.send(err);
    mongoose.model('tasks').find(function(err, tasks) {});
    });
  mongoose.model('projects').find(function(err, projects) {
    res.send(projects)
  });
});

});

module.exports = router;
