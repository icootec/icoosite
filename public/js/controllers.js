'use strict';

/* Controllers */

angular.module('icoo.controllers', [])
.controller('homeCtrl', ['$scope', function($scope) {
    $scope.fadeAnimation = false;
    $scope.theForm = document.getElementById( 'theForm' );
    new stepsForm( theForm, {
        onSubmit : function( form ) {
            // hide form
            classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );

            /*
            form.submit()
            or
            AJAX request (maybe show loading indicator while we don't have an answer..)
            */

            // let's just simulate something...
            var messageEl = theForm.querySelector( '.final-message' );
            messageEl.innerHTML = 'Thank you! We\'ll be in touch.';
            classie.addClass( messageEl, 'show' );
        }
    } );
}])
.controller('empresaCtrl', ['$scope', function($scope) {
    $scope.msg = "Esse é controller EMPRESA"
}])
.controller('servicosCtrl', ['$scope', function($scope) {

  }]);
