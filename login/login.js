$('.message a').click(function(){
	$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

var app = angular.module('LoginApp', []);
app.controller('LoginCtrl', function($scope) {
	var ref = new Firebase("https://linkedin-project.firebaseio.com");
			
	$scope.register = function() {
	    if ($scope.password1 != $scope.password2) {
	    	document.getElementById("notiRegister").innerHTML = "Confirm password is incorrect! ";
	    } else {
	    	ref.createUser({
			    email    : $scope.email,
			    password : $scope.password1
		  	}, function(error, userData) {
			    if (error) {
			      	console.log("Error creating user:", error);
			      	window.alert("Error creating user");
				} else {
				    console.log("Successfully created user account with uid:", userData.uid);
				    window.alert("Successfully created user account");
				}
		  	});
		  	document.getElementById("notiRegister").innerHTML = null;
	    }
	}

	$scope.login = function() {
	    ref.authWithPassword({
	      	email    : $scope.username,
			password : $scope.password
		}, function(error, authData){
		   	if (authData)
		   		window.location = "../index.html";
		   	else {
		   		document.getElementById("notiLogin").innerHTML = "Username or password is incorrect!";
		   		console.log("Username or password is incorrect!");
		   	}
		});	
	}

	function authDataCallback() {
		var authData = ref.getAuth();
		if (authData) {
		    console.log("User " + authData.uid + " is logged in with " + authData.provider);
		    window.location = "../index.html";
		} else {
		    console.log("User is logged out");
		}
	}

	ref.onAuth(authDataCallback);
});