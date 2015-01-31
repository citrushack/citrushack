(function(){
    'use strict';

    /**
     * Main controller
     */

    function mainCtrl ($scope, $rootScope, $modal, Contact) {
        // Name of the view
        $scope.pageView = 'main-view';
        // Security breach elaboration
        $scope.securityElaborate = 'Although your project could be security related';
        // Project ideas explanation
        $scope.projectIdeasType = 'These projects would be a mix of humanitarian and utility applications'; 
        // Bind contact
        $scope.Contact = Contact;
        // See if we are sending a form
        $scope.submitting = false;

        if ($rootScope.successApply){
            $modal.open({
                templateUrl: 'partials/successAppModal.html'
              , controller: 'SuccessAppModalCtrl'
              , size: 'md'
              , backdrop: 'static'
            });

            // Set successfull apply back to false
            // so we don't show the modal again
            $rootScope.successApply = false;
        }

        // Send contact form
        $scope.sendMessage = function () {
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.contactForm.$valid) {
                $scope.submitting = true;
                // Send the from
                Contact.sendMessage()
                    .finally(function(){
                        $scope.submitting = false;
                    });
            }
        }
    }

    /**
     * Register controller
     */

    angular.module('CitrusHack.controllers')
        .controller('MainCtrl', ['$scope', '$rootScope', '$modal', 'Contact', mainCtrl]);

})();
