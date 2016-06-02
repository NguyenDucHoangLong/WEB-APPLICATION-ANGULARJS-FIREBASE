var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

   .when('/detail', {
    templateUrl : 'pages/detail.html',
    controller  : 'DetailController'
  })

 .otherwise({redirectTo: '/'});
});