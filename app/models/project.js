var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectsSchema = new Schema({
  name: {type: String, required: true}
});

mongoose.model('projects', projectsSchema);
