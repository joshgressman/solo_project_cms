var express = require('express');
var router = express.Router();
var passport = require('passport');
var Users = require('../models/user');
var path = require('path');


// Handles request for HTML file
router.get('/', function(req, res, next) {
    res.sendFile(path.resolve(__dirname, '../public/views/register.html'));
});

// Handles POST request with new user data
router.post('/', function(req, res, next) {
    Users.create(req.body, function(err, post) {
         if(err) {
             next(err);
             //stop this middlware, redirect to home to re-register because of err
         } else {
              //send to home/log in page becasue they are a user
             res.redirect('/');
         }
    });
});


module.exports = router;
