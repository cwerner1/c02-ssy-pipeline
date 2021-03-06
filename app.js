const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Load routes into variables
const index = require('./routes/index');
const queue = require('./routes/queue');
const byteCounter = require('./routes/byteCounter');
const countIP = require('./routes/countIP');
const pubsub = require('./routes/pubsub');
const app = express();

// Template engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Generic application setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Configure routes in Express webserver
app.use('/', index);
app.use('/queue/', queue);
app.use('/byte-counter/', byteCounter);
app.use('/pubsub/', pubsub);
app.use('/host-counter/', countIP);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(404);
    res.send('Not found');
});

// error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log(err.stack);
    res.send(err.stack);
});

module.exports = app;
