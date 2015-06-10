'use strict';

var express        = require('express');
var app            = express();
var router         = express.Router();

app.set('port', 8080);
app.set('view engine', 'ejs');
/**
 * these directory configurations are needed, with these we are
 * telling express to accept the content of these directories
 */
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/public', express.static(__dirname + '/public'));
app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);

var indexRoute = function(req, res) {
  res.render('index.html');
};

router.route('/').get(indexRoute);

function showPartials(req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
}
//route declaration for the partials
router.route('/partials/:name').get(showPartials);

//apply routes
app.use('/', router);

app.listen(app.get('port'));
console.log('Magic happens on port ' + app.get('port'));
