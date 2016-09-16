myApp.controller('registerController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.user = {
      username: '',
      password: ''
    };
    $scope.message = '';

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



    // $scope.login = function() {
    //   //checks to makse sure that an username and id have been entered
    //   if($scope.user.username == '' || $scope.user.password == '') {
    //     $scope.message = "Enter your username and password!";
    //   } else {
    //     console.log('sending to server...', $scope.user);
    //     $http.post('/', $scope.user).then(function(response) {
    //       if(response.status == 200) { //response.data.username
    //         // console.log('success: ', response.data);
    //         // location works with SPA (ng-route)
    //         console.log('redirecting to user page');
    //         $location.path('/home'); //was user
    //       } else {
    //         console.log('failure: ', response);
    //         $scope.message = "Wrong!";
    //         $location.path('/failure'); //was user
    //       }
    //     });
    //   }
    // }
//checks to see if the input is blank, if blank runs the else
    $scope.registerUser = function() {
      if($scope.user.username == '' || $scope.user.password == '') {
        $scope.message = "Choose a username and password!";
      } else {
        //runs else which is the POST route sends user info
        console.log('sending to server...', $scope.user);
        $http.post('/register', $scope.user).then(function(response) {
          console.log('success');
          $location.path('/login');
        },
        function(response) {
          console.log('error');
          $scope.message = "Please try again."
        });
      }
    }
}]);
