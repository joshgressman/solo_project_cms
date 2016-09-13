myApp.controller('UserController', ['$scope', '$http', '$location', '$window', function($scope, $http, $location, $window){

   $scope.userName;

   //This happens after page load, which means it has authentication
   //Not secure

   $http.get('/user').then(function(response){
     if(response.data.username){
       $scope.userName = response.data.username;
       console.log('User Data', $scope.userName);
     } else {
       $window.location.href = '/index.html';
     }
   });

  }]);
