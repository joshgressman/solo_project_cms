myApp.controller('inactiveController', ['$scope', '$http', '$location', function($scope, $http, $location){
console.log("inactive Controller");

$scope.contacts = []; // the array of clients
$scope.contact = [];
$scope.formData = {};

console.log("scope contacts", $scope.contacts);
getInactive();

$http.get('/home').then(function(response) {
    if(response.data.username) {
        // user has a curret session on the server
        $scope.userName = response.data.username;
        console.log('User Data: ', $scope.userName);
    } else {
        // user has no session, bounce them back to the login page
        $location.path("/login"); //was home
    }
});

//GET clients from the DB
function getInactive () {
$http.get('/inactive')
.then(function(response){
  console.log('Get contacts', response.data);
  var contacts = response.data;
  // $scope.contacts = contactDataArray;
  $scope.formData.contacts = contacts;
  console.log('new array',$scope.formData.contacts);
});
// $scope.contacts = contactDataArray;

}

//////////////*********UPDATE CONTACTS**************************///////
$scope.updateContact = function (contact) {
  var id = contact._id;

  console.log('contact id', contact._id);
 $http.put('/inactive/' + id, contact)
 .then(function(){
   console.log('PUT /contacts', id);
   getInactive();
 });
};

///***********************DELETE CONTACT*****************************/////
$scope.deleteContact = function (contact) {
  var confirmed = confirm("Are you sure you want to DELETE this contact?");
  var id = contact._id;
  if(confirmed === true){
  $http.delete('/inactive/' + id)
  .then(function(){
    console.log('DELETE/contacts', id);
    getInactive();
  });
};
};


}]);
