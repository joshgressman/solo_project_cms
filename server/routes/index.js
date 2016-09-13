var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');

//Handles login from POST from index.html
router.post('/',
    passport.authenticate('local', {
        successRedirect: '#home', //'/views/partials/home.html',
        failureRedirect: '#fail', //'/views/partials/failure.html'
    })
);



// Handle index file separately
// Also catches any other request not explicitly matched elsewhere
router.get('/', function(req, res) {
  console.log("request for index");
  res.sendFile(path.join(__dirname, '../public/views/partials/index.html'));
});

module.exports = router;
