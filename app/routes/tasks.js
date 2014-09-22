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
  task.status = req.body.status;
  task.due_date = req.body.due_date;
  task.time_estimate = req.body.time_estimate;
  task.sub_task = req.body.sub_task;
  task.attachment = req.body.attachment;






  task.save(function(err) {
    if (err)
      res.send(err);
    res.json({
      message: 'Task created!'
    });
  });
});

/* get a task. */
router.get('/:task_id', function(req, res) {
  var task = mongoose.model('tasks');
  task.findById(req.params.task_id, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
});


/* edit a task. */
router.post('/:task_id', function(req, res) {
  var task = mongoose.model('tasks');
  task.findById(req.params.task_id, function(err, task) {
    if (err)
      res.send(err);
    console.log(task);
    task.name = req.body.name;
    task.description = req.body.description;
    task.project = req.body.project;
    console.log(task);
    task.save(function(err) {
      if (err)
        res.send(err);
      res.json({
        message: 'Task updated!'
      });
    });
  });
});


/* delete a task. */
router.delete('/:task_id', function(req, res) {
  var task = mongoose.model('tasks');
  task.remove({
    _id: req.params.task_id
  }, function(err, task) {
    if (err)
      res.send(err);

    res.json({
      message: 'Successfully deleted'
    });
  });
});



module.exports = router;
