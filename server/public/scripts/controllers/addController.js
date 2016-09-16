myApp.controller('addController', ['$scope', '$http', '$location', function($scope, $http, $location){

$scope.newContact = {} // single contact to be added to DB
$scope.message = '';

/////*****************VERIFY IF LOGGED IN*******************///////
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
