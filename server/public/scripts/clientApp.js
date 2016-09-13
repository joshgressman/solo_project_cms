//this will handle the #routes
var myApp = angular.module('myApp', ['ngRoute']);

//need to add the links to the new pages with controllers

//page routing
myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home', {
      templateUrl: '/views/partials/home.html',
      controller: "homeController"
    })
    .when('/add', {
      templateUrl: '/views/partials/addcontact.html',
      controller: "addController"
    })
    .when('/client', {
      templateUrl: '/views/partials/client.html',
      controller: "clientController"
    })
    .when('/prospect', {
      templateUrl: '/views/partials/prospect.html',
      controller: "prospectController"
    })
    .when('/inactive', {
      templateUrl: '/views/partials/inactive.html',
      controller: "inactiveController"
    })
    .when('/login', {
      templateUrl: '/views/partials/login.html',
      controller: "loginController"
    })
    .when('/register', {
      templateUrl: '/views/partials/register.html',
      controller: "registerController"
    })
    .when('/user', {
      templateUrl: '/views/partials/user.html',
      controller: "UserController"
    })
    .when('/fail', {
      templateUrl: '/views/partials/failure.html',
      controller: "failureController"
    })
    .otherwise({
      redirectTo: '/login' //use this to send to login was '/home'
    })

}]);
