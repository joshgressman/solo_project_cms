//Database routes for CRUD to the database

var express = require('express');
var router = express.Router();

//********ROUTES TO SCHEME FILE ************////
var Contacts = require('../models/contacts');
// var Events = require('../models/events');
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

///****************GET CONTACTS**************************//////
router.get('/', function(req, res){
Contacts.find({contactType:"inactive"}, function(err, contacts){
  if(err){
    res.sendStatus(500);
    return;
  }
  res.send(contacts);
});
});

//////////*******************PUT /UPDATE Contacts on view **********/////
router.put('/:id', function(req,res){
  var contact = req.body;
  console.log('req.body', req.body);
  var id = req.params.id;
  console.log('id',req.params.id)
  Contacts.findByIdAndUpdate(id,contact, function(err, contact){
    if(err){
      res.sendStatus(500);
      return;
    }
    res.status(204).send(contact);
  });
});

///////////********************DELETE CONTACT ********************///////
router.delete('/:id', function(req, res){
  var id = req.params.id;
  Contacts.findByIdAndRemove(id, function(err){
    if(err){
      res.sendStatus(500);
      return;
    }
    res.sendStatus(204);
  });
});

///////************************EVENT POST **************************////



module.exports = router;
