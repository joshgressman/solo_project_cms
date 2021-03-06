var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//************ Added for passport
var passport = require('./strategies/userStrategy');
var session = require('express-session');

/**----------------- OUR ROUTES ------------------------------**/

var index = require('./routes/index');
var contacts = require('./routes/contacts');
var prospect = require('./routes/prospect');
var inactive = require('./routes/inactive');
var register = require('./routes/register');
var home = require('./routes/home'); //to home / user screen once logged in
/**----------------- MIDDLEWARE ------------------------------**/
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//***************PASSPORT SESSION********************************//
app.use(session({
   secret: 'secret',
   key: 'user',
   resave: 'true',
   saveUninitialized: false,
   cookie: { maxage: 60000, secure: false }
}));

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/**----------------- EXPRESS ROUTES ------------------------------**/
app.use('/', index);
app.use('/contacts', contacts);
app.use('/prospect', prospect);
app.use('/inactive', inactive);
app.use('/register', register);
app.use('/home', home);
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
