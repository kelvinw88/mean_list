var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();


/* GET Tasks page. */
router.get('/', function(req, res) {
  mongoose.model('tasks').find(function(err,tasks){
    mongoose.model('tasks').populate(tasks,{path: 'project'},function(err,tasks){
      res.send(tasks);
    })
  });
});

/* post Task page. */
router.post('/', function(req, res) {
  var tasks = mongoose.model('tasks');
  var task = new tasks();
  task.name = req.body.name;
  task.description = req.body.description;
  task.project = req.body.project;
  task.save(function(err) {
    if (err)
      res.send(err);
    res.json({
      message: 'Project created!'
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
  var project = mongoose.model('projects');
  project.findById(req.params.bear_id, function(err, project) {
    if (err)
      res.send(err);
    project.name = project.body.name;
    project.save(function(err) {
      if (err)
        res.send(err);
      res.json({
        message: 'Project updated!'
      });
    });
  });
});


/* delete a project. */
router.delete('/:project_id', function(req, res) {
  var project = mongoose.model('projects');
  project.remove({
    _id: req.params.project_id
  }, function(err, project) {
    if (err)
      res.send(err);

    res.json({
      message: 'Successfully deleted'
    });
  });
});



module.exports = router;
