myApp.controller('prospectController', ['$scope', '$http', '$location', function($scope, $http, $location){
console.log("prospect Controller");

$scope.contacts = []; // the array of clients
$scope.contact = [];
$scope.formData = {};

console.log("scope contacts", $scope.contacts);
getProspect();


//GET clients from the DB
function getProspect () {
$http.get('/prospect')
.then(function(response){
  console.log('Get contacts', response.data);
  var contacts = response.data;
  $scope.formData.contacts = contacts;
  console.log('new array',$scope.formData.contacts);
});


}

//////////////*********UPDATE CONTACTS**************************///////
$scope.updateContact = function (contact) {
  var id = contact._id;

  console.log('contact id', contact._id);
 $http.put('/prospect/' + id, contact)
 .then(function(){
   console.log('PUT /contacts', id);
   getProspect();
 });
};

///***********************DELETE CONTACT*****************************/////
$scope.deleteContact = function (contact) {
  var confirmed = confirm("Are you sure you want to DELETE this contact?");
  var id = contact._id;
  if(confirmed === true){
  $http.delete('/prospect/' + id)
  .then(function(){
    console.log('DELETE/contacts', id);
    getProspect();
  });
};
};

//*****************************ADD EVENT POST ************************////
// $scope.addEvent = function (contact) {
//   var id = contact._id;
//   console.log('contact id', contact._id);
//  $http.put('/contacts/' + id, contact)
//  .then(function(){
//    console.log('PUT /contacts', id);
//    getContacts();
//  });
// };





//**********END OF CONTROLLER*******************************//

}]);
