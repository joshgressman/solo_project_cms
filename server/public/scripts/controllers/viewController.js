myApp.controller('viewController', ['$scope', '$http', '$location', function($scope, $http, $location){
console.log("viewController connected");
$scope.contacts = []; // the array of clients
$scope.displayContactId = '';
console.log("id", $scope.displayContactId);
console.log("scope contacts", $scope.contacts);
getContacts();


//GET clients from the DB
function getContacts () {
$http.get('/contacts')
.then(function(response){
  console.log('Get contacts', response.data);
  var contactDataArray = response.data;
  $scope.contacts = contactDataArray;
});
// $scope.contacts = contactDataArray;

}

//////////////*********UPDATE CONTACTS**************************///////
$scope.updateContact = function (contact) {
  var id = contact._id;
  console.log('contact id', contact._id);
 $http.put('/contacts/' + id, contact)
 .then(function(){
   console.log('PUT /contacts', id);
   getContacts();
 });
};




//**********END OF CONTROLLER*******************************//
}]);
