var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/**----------------- OUR ROUTES ------------------------------**/

var index = require('./routes/index');

/**----------------- MIDDLEWARE ------------------------------**/
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());

/**----------------- EXPRESS ROUTES ------------------------------**/
app.use('/', index);

/**----------------- MONGOOSE CONNECTION ------------------------------**/


/**----------------- START SERRVER ------------------------------**/
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
  console.log("Listening on port", app.get('port'));
});
