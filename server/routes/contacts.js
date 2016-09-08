//Database routes for CRUD to the database

var express = require('express');
var router = express.Router();

//********ROUTES TO SCHEME FILE ************////
var Contacts = require('../models/contacts');

///////*************POST CONTACTS TO DATABSE****************////////
router.post('/', function(req,res){
console.log('POST', req.body);
var contact = Contacts(req.body);
contact.save(function(err){
  if(err){
    res.sendStatus(500);
    return;
  }
  res.sendStatus(201); // created
});

});

module.exports = router;
