var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

/* GET Projects page. */
router.get('/', function(req, res) {
  mongoose.model('projects').find(function(err,projects){
    res.send(projects)
  });
});

/* post Projects page. */
router.post('/', function(req, res) {

	var project = new project(); 		// create a new instance of the Bear model
	project.name = req.body.name;  // set the bears name (comes from the request)
	// save the bear and check for errors
	project.save(function(err) {
		if (err)
			res.send(err);
		res.json({ message: 'Project created!' });
	});

});

/* get a project. */
router.get('/:project_id', function(req, res) {
  


});

/* edit a project. */
router.post('/:project_id', function(req, res) {

});

/* delete a project. */
router.delete('/:project_id', function(req, res) {

});


module.exports = router;
