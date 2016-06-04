var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'dashboard.html',
    controller  : 'DashBoardController'
  })

   .when('/detail', {
    templateUrl : 'projectdetail.html',
    controller  : 'ProjectDetailController'
  })

 .otherwise({redirectTo: '/'});
});