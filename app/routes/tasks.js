var express = require('express');
var router = express.Router();
var router = express.Router();

/* GET Tasks page. */
router.get('/', function(req, res) {
  mongoose.model('tasks').find(function(err,tasks){
    mongoose.model('tasks').populate(tasks,{path: 'project'},function(err,tasks){
      res.send(tasks);
    })
  });
});

module.exports = router;
