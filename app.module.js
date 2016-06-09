var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('ChatController', ['$scope', '$http', function($scope, $http){
  	$http.get('database/chat.json').success(function(data) {
    	$scope.friends = data;
  	});

  $scope.sendMessage = function() {
      	$scope.inserted = {
      		user: "ndtrung",
          	text: this.text
      	};

      	$scope.friends[this.friendId].message.push($scope.inserted);

       	this.text = "";
    };
}]);