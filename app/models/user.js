var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var usersSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true },
  email: {type: String}
});
mongoose.model('users', usersSchema);
