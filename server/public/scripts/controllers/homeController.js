myApp.controller('homeController', ['$scope', '$http', '$location', function($scope, $http, $location){
console.log("Home Controller");

console.log('checking user');
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

  $scope.logout = function() {
    $http.get('/home/logout').then(function(response) {
      console.log('logged out');
      $location.path("/login"); //was home
    });
  }



}]);
