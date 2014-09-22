var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var tasksSchema = new Schema({
  name: String,
  description: String,
  project: {
    type: Schema.Types.ObjectId,
    ref: 'projects'
  }
});

mongoose.model('tasks', tasksSchema);
