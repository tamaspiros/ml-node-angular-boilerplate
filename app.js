'use strict';

var express        = require('express');
var app            = express();
var router         = express.Router();

app.set('port', 8080);
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/public', express.static(__dirname + '/public'));
app.use('/', router);

var indexRoute = function(req, res) {
  res.sendFile(__dirname + '/index.html');
};

router.route('/').get(indexRoute);

app.listen(app.get('port'), function() {
  console.log('Magic happens on port ' + app.get('port'));
});
