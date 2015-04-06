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
        // See if we have sent the contact form
        $scope.sentForm = false;

        // Send contact form
        $scope.sendMessage = function () {
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.contactForm.$valid) {
                // Send the form
                Contact.sendMessage()
                    .finally(function(){
                        $scope.sentForm = true;
                    });
            }
        };
    }

    /**
     * Register controller
     */

    angular.module('CitrusHack.controllers')
        .controller('MainCtrl', ['$scope', '$rootScope', '$modal', 'Contact', mainCtrl]);

})();
