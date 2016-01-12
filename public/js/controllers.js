'use strict';

/* Controllers */

angular.module('icoo.controllers', [])
.controller('homeCtrl', ['$scope', function($scope) {
    $scope.fadeAnimation = false;
}])
.controller('empresaCtrl', ['$scope', function($scope) {
    $scope.msg = "Esse é controller EMPRESA"
}])
.controller('servicosCtrl', ['$scope', function($scope) {

  }]);
