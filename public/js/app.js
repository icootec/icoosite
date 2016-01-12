'use strict';


// Declare app level module which depends on filters, and services
angular.module('icoo', [
  'ngRoute',
  'icoo.filters',
  'icoo.services',
  'icoo.directives',
  'icoo.controllers',
  'ngAnimate'
]).
config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.when('/empresa', {
      templateUrl: 'partials/partial1.html',
      controller: 'empresaCtrl'
    });
  $routeProvider.when('/servicos', {
    templateUrl: 'partials/servicos.html',
    controller: 'servicosCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/'});
  $locationProvider.html5Mode(true);
}]);
