var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();


/* GET Projects page. */
router.get('/', function(req, res) {


  // mongoose.model('tasks').find(function(err, tasks) {
  //   tasks.populate(tasks, {
  //     path: 'project'
  //   }, function(err, tasks) {
  //     tasks.where('name').equals('awd').find(function(err, tasks) {
  //       console.log('tasks');
  //     })
  //   })
  // });
  //
  // mongoose.model('tasks').find(function(err, tasks) {
  //   mongoose.model('tasks').populate(tasks, {
  //     path: 'project'
  //   }, function(err, tasks) {
  //
  //       tasks.where('project._id').equals('542384bfdf72f6000042b0ea').find(function(err, tasks) {
  //       console.log(tasks);
  //     })
  //   })
  // });
  //

  // var project_id = req.param('project_id')
  // project_id = "54238e93df72f6000042b0f4";
  //
  // mongoose.model('tasks').find(function(err, tasks) {
  //   mongoose.model('tasks').populate(tasks, {
  //     path: 'project'
  //   }, function(err, tasks) {
  //     mongoose.model('tasks').where('project._id').equals(project_id).remove(function(err, tasks){
  //     });
  //   });
  // });




  mongoose.model('projects').find(function(err, projects) {
    res.send(projects)
  });
});

/* post Projects page. */
router.post('/', function(req, res) {
  var projects = mongoose.model('projects');
  var project = new projects();
  project.name = req.body.name;
  project.save(function(err) {
    if (err)
      res.send(err);
    mongoose.model('projects').find(function(err, projects) {
      res.send(projects)
    });
  });
});

/* get a project. */
router.get('/:project_id', function(req, res) {
  var project = mongoose.model('projects');
  project.findById(req.params.project_id, function(err, project) {
    if (err)
      res.send(err);
    res.json(project);
  });
});


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
    // mongoose.model('tasks').find(function(err, tasks) {});
    // });
  // send back the new projects file.
  mongoose.model('projects').find(function(err, projects) {
    res.send(projects)
  });
});

});

module.exports = router;
