var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectsSchema = new Schema({
  name: {type: String, required: true},
  time : { type : Date, default: Date.now }
});

mongoose.model('projects', projectsSchema);
