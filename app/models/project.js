var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var projectsSchema = new Schema({
  name: String,
  task: {
    type: Schema.Types.ObjectId,
    ref: 'task'
  }

});

mongoose.model('projects', projectsSchema);
