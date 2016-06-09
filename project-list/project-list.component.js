angular.
	module('myApp').
	component('projectList', {
		templateUrl: 'project-list/project-list.template.html',
		controller: ['$scope', '$http',
	      	function ProjectListController($scope, $http) {
	        	var self = this;
	        	
	        	$http.get('database/project.json').then(function(response) {
	          	self.projects = response.data;
	       	 	});

	       	 	$scope.addProject = function() {
	       	 		$scope.inserted = {
	       	 			id: self.projects.length,
			        	projectName: this.text,
			        	tasks: []
			      	};

			      	self.projects.push($scope.inserted);

			       	this.text = "";
	       	 	}
	        }
	    ]
	});