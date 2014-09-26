var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var tasksSchema = new Schema({
  name: {type: String, required: true},
  description: { type: String, default: null },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'projects',
    required: true
  },
  done: {type: Boolean, default: false },
  status: { type: String, default: "fa fa-circle-o" },
  due_date: { type: Date, default: null },
  time_estimate: { type: Number, default: null },
  sub_task: {
      type: Array,
      default: []
    },
  attachment: {
      type: Array,
      default: []
    },
  time : { type : Date, default: Date.now }
});

mongoose.model('tasks', tasksSchema);
