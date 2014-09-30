var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


//SET UP DATABASE
var mongo = require('mongodb');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/mean_list');

var routes = require('./app/routes/index');
var projects = require('./app/routes/projects');
var users = require('./app/routes/users');
var tasks = require('./app/routes/tasks');

var app = express();

var debug = require('debug')('mean_list');

app.set('port', process.env.PORT || 3000);

var server = require('http').createServer(app);

server.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});

var io = require("socket.io").listen(server);




console.log("MEAN LIST!");

//model setup
var walk    = require('walk');
var files   = [];

// Walker options
var walker  = walk.walk('./app/models', { followLinks: false });

walker.on('file', function(root, stat, next) {
    // Add this file to the list of files
    files.push(root + '/' + stat.name);
    next();
});

walker.on('end', function() {
  files.forEach(function(filename){
    require(filename);
  });
});


// view engine setup
app.set('views', path.join(__dirname, 'app/views'));
//app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//app.use('/', routes);
app.use('/users', users);
app.use('/api/projects', projects);
app.use('/api/tasks', tasks);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handlers
// console.log("show up");
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        // res.render('error', {
        //     message: err.message,
        //     error: err
        // });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

io.on('connection',function(socket){
  console.log('connected!');
})




module.exports = app;
