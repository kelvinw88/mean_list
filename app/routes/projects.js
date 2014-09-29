var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();


/* GET Projects page. */
router.get('/:username', function(req, res) {

  mongoose.model('users').where('username').equals(req.params.username).find(function(err, user) {
    mongoose.model('projects').find({'users' : user[0]._id}, function(err, projects) {
        res.send(projects);
    });
  });

});

/* post Projects page. */
router.post('/', function(req, res) {


  var projects = mongoose.model('projects');
  var project = new projects();

  project.name = req.body.name;
  project.users.push(req.body.user_id);

  project.save(function(err) {
    if (err)
      res.send(err);
    mongoose.model('projects').find({'users' : req.body.user_id}, function(err, projects) {
      res.send(projects);
    });
  });
});

/* GET a project. */
// router.get('/:project_id', function(req, res) {
//   var project = mongoose.model('projects');
//   project.findById(req.params.project_id, function(err, project) {
//     if (err)
//       res.send(err);
//     res.json(project);
//   });
// });



/* edit a project. */
router.post('/:project_id', function(req, res) {
  console.log("got into the backend");
  var project = mongoose.model('projects');
  project.findById(req.params.project_id, function(err, project) {

    if (err)
      res.send(err);
    project.name = req.body.name;
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
