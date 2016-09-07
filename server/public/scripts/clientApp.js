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
      templateUrl: '/views/partials/register.html',
      controller: "addController"
    })
    .when('/view', {
      templateUrl: '/views/partials/user.html',
      controller: "viewController"
    })
    .when('/planner', {
      templateUrl: '/views/partials/planner.html',
      controller: "plannerController"
    })
    .otherwise({
      redirectTo: '/home'
    })

}]);
