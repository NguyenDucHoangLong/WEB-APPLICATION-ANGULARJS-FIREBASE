(function(){
	'use strict';

	angular
	.module('statusApp')
	.controller('AuthController', AuthController);

	function AuthController(Auth, $state){

		var vm = this;

		vm.createUser = createUser;
		vm.login = login;
	}
})();