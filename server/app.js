// import files and packages up here
var express = require('express');


// create your express server below
var app = express();
var json = require('./data.json');
var morgan = require('morgan');
var express = require('express');

// add your routes and middleware below
app.use(morgan('dev'))
app.get('/', function(req, res){
    res.status(200).send('Hello World');
})

app.get('/data', function(req, res){
    res.send(json);
})

// finally export the express application
module.exports = app;
