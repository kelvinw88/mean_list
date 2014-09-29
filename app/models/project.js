var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectsSchema = new Schema({
  name: {type: String, required: true},
  time : { type : Date, default: Date.now },
  users: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    default: []
  },
});

mongoose.model('projects', projectsSchema);
