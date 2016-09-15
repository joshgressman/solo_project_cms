//this will handle the #routes
var myApp = angular.module('myApp', ['ngRoute']);

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
    .when('/register', {
      templateUrl: '/views/partials/register.html',
      controller: "LoginController"
    })
    .when('/login', {
      templateUrl: '/views/partials/login.html',
      controller: "LoginController"
    })
    .when('/failure', {
      templateUrl: '/views/partials/failure.html',
      controller: "failureController"
    })
    .otherwise({
      redirectTo: '/home'
    })

}]);
