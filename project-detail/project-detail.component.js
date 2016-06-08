angular.
 	module('myApp').
  	component('projectDetail', {
    	templateUrl: 'project-detail/project-detail.template.html',
    	controller: ['$http', '$routeParams',
	      	function ProjectDetailController($http, $routeParams) {
	        	var self = this;

	        	$http.get('database/project.json').then(function(response) {
	        	self.id = $routeParams.projectId;
	          	self.project = response.data[self.id];
	          	self.taskId = 0;
	       	 	});
	        }
	    ]
  	});