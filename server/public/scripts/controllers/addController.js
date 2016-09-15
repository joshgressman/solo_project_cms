myApp.controller('addController', ['$scope', '$http', '$location', function($scope, $http, $location){

$scope.newContact = {} // single contact to be added to DB
$scope.message = '';

//**********ADD CONTACT FUNCTION ON SUBMIT

$scope.submitNewContact = function () {
var data = $scope.newContact;
$http.post('/contacts', data)
.then(function(){
  $scope.message = 'Contact Added!';
  console.log('POST /contancts', data);
});
console.log('newContact', $scope.newContact);
}



///**********END OF CONTROLLER***************************************///////
}]);
