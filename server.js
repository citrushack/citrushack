/**
 * Module Dependancies
 */

// External
var express = require('express')
  , path    = require('path')
  , util    = require('util');

// Local
var app = express();

/**
 * Configure express server
 */

// Set static file path
var sitePath = path.join(__dirname, 'site');
app.use(express.static(sitePath));

/**
 * Start express server
 */

var port = process.env.PORT || 8080;
app.listen(port, function (){
    util.log('Server listening on port ' + port);
});
