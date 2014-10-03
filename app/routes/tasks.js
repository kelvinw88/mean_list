var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var util = require('util');

function inspect(o, depth)
{
  return console.log(util.inspect(o, { colors: true, depth: depth || 1 }));
}

/* GET Tasks page. */
router.get('/', function(req, res) {
  //get all tasks with time sort
  mongoose.model('tasks').find().sort([
    ['time', 'descending']
  ]).find(function(err, tasks) {
    mongoose.model('tasks').populate(tasks, {
      path: 'project'
    }, function(err, tasks) {
      res.send(tasks);
    })
  });
});


/* GET users Task. */
router.get('/user/:user_id', function(req, res) {
  //get all tasks with time sort
  mongoose.model('tasks').where('admin').equals(req.param('user_id')).find(function(err,tasks){
    res.send(tasks);
  })
});



//get project's task
router.get('/project/:project_id', function(req, res) {

  var project_id = req.param('project_id')
  mongoose.model('tasks').find().sort([
    ['time', 'descending']
  ]).find(function(err, tasks) {
    mongoose.model('tasks').populate(tasks, {
      path: 'project'
    }, function(err, tasks) {
      mongoose.model('tasks').where('project').equals(project_id).find(function(err, tasks) {
        res.send(tasks);
      })
    })
  });
});


/*
curl -X POST -H "Content-Type: application/json" -d '{"name":"totleraf"}' http://localhost:3000/api/tasks
*/
/* post Task page. */
router.post('/', function(req, res) {
  var tasks = mongoose.model('tasks');
  var task = new tasks();

  task.name = req.body.name;
  task.description = req.body.description;
  task.done = req.body.done;
  task.project = req.body.project;
  task.status = req.body.status;
  task.due_date = req.body.due_date;
  task.progress_bar = req.body.progress_bar;
  task.time_estimate = req.body.time_estimate;
  task.sub_task = req.body.sub_task;
  task.attachment = req.body.attachment;
  task.admin = req.body.admin;

  task.save(function(err) {
    if (err)
      res.send(err);
    res.send(task);
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
router.post('/:task_id', function(req, res)
{
  var task = mongoose.model('tasks');
  task.findById(req.params.task_id, function(err, task)
  {
    if (err)
    {
      console.error(err);
      return res.send(err);
    }

    task.name = req.body.name;
    task.description = req.body.description;
    task.done = req.body.done;
    task.project = req.body.project;
    task.status = req.body.status;
    task.due_date = req.body.due_date;
    task.progress_bar = req.body.progress_bar;
    task.time_estimate = req.body.time_estimate;
    task.sub_task = req.body.sub_task;
    task.attachment = req.body.attachment;
    task.save(function(err)
    {
      if (err)
      {
        console.log("Error: %s", err.message)
        return res.send(err);
      }
      return res.json(task);
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
      {res.send(err);}
    else{
      res.send(task);
      
    }

    })
  });



module.exports = router;
