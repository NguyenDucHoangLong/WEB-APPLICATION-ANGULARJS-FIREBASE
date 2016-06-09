angular.
	module('myApp').
	component('projectList', {
		templateUrl: 'project-list/project-list.template.html',
		controller: ['$http',
	      	function ProjectListController($http) {
	        	var self = this;
	        	
	        	$http.get('database/project.json').then(function(response) {
	          	self.projects = response.data;
	       	 	});
	        }
	    ]
	});