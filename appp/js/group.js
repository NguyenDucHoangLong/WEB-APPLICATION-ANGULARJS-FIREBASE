 var app = angular.module('myApp', ["firebase"]);
  app.controller('controllgroup', function($scope, $firebaseArray)
  {
    var groupfire = new Firebase("https://dackntl.firebaseio.com/Group");
        // groupfire.child('Group');
        $scope.myGroup = $firebaseArray(groupfire);
        $scope.hideformGroup = true;
        $scope.showAddExp = function () {
            $scope.hideformGroup = false;
        }

        $scope.addExp = function () {
           
            var newMessageRef = groupfire.push();
            newMessageRef.set({ tenGroup: $scope.ftenGroup, mota: $scope.fmota, id: $scope.fid });
            
            $scope.hideformExp = true;
        }
    });