angular.
 	module('myApp').
  	component('projectDetail', {
    	templateUrl: 'project-detail/project-detail.template.html',
    	controller: ['$scope', '$http', '$routeParams',
	      	function ProjectDetailController($scope, $http, $routeParams) {
	        	var self = this;

	        	$http.get('database/project.json').then(function(response) {
	        	self.id = $routeParams.projectId;
	          	self.project = response.data[self.id];
	          	self.taskId = 0;
	       	 	});

	        	$scope.sendMessage = function() {
			      	$scope.inserted = {
			      		userName: "ndtrung",
			          	text: this.text
			      	};

			      	self.project.tasks[self.taskId].discuss.push($scope.inserted);

			       	this.text = "";
			    };
	        }
	    ]
  	});