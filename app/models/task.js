var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var tasksSchema = new Schema({
  name: {type: String, required: true},
  description: { type: String, default: null },
  admin: {type: Schema.Types.ObjectId, ref: 'users'},
  project: {
    type: Schema.Types.ObjectId,
    ref: 'projects',
    required: true
  },
  users: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    default: []
  },
  done: {type: Boolean, default: false },
  status: { type: String, default: "fa fa-circle-o" },
  due_date: { type: Date, default: null },
  time_estimate: { type: Number, default: null },
  progress_bar: { type: Number, default: 0},
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
