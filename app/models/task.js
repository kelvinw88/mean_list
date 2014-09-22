var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var tasksSchema = new Schema({
  name: {type: String, required: true},
  description: { type: String, default: null },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'projects'
  }
});

mongoose.model('tasks', tasksSchema);
