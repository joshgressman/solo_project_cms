myApp.controller('viewController', ['$scope', '$http', '$location', function($scope, $http, $location){
$scope.contacts = []; // the array of clients
console.log($scope.contacts);
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




//**********END OF CONTROLLER*******************************//
}]);
