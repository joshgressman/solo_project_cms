var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/**----------------- OUR ROUTES ------------------------------**/

var index = require('./routes/index');
var contacts = require('./routes/contacts');
/**----------------- MIDDLEWARE ------------------------------**/
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());

/**----------------- EXPRESS ROUTES ------------------------------**/
app.use('/', index);
app.use('/contacts', contacts);
/**----------------- MONGOOSE CONNECTION ------------------------------**/
var databaseUri = 'mongodb://localhost:27017/soloproject';

mongoose.connect(databaseUri);

mongoose.connection.on('connected', function(){
  console.log('Mongoose connected to', databaseUri);
});

mongoose.connection.on('error', function(err){
  console.log('Mongoose failed to connect becasue of error', err);
});

/**----------------- START SERRVER ------------------------------**/
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function(){
  console.log("Listening on port", app.get('port'));
});
