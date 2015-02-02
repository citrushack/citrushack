(function(){
    'use strict';

    /**
     * Apply controller
     */

    function applyCtrl ($scope, $rootScope, $modal, $document, $location, Application) {
        // Name of the view
        $scope.pageView = 'apply-view';
        // Reason for needing a phone number
        $scope.phoneNeededReason = 'In case of an emergency or we need ' +
                                   'to otherwise reach you quickly during ' +
                                   'the event';
        // Reason for needing age
        $scope.ageNeededReason = 'Since this is an overnight event, You must ' +
                                 'be 18 or older to participate'; 

        // Details about transportation
        $scope.transDetail = 'We will be providing transportation for a select ' +
                             'number of schools. This will help us figure out ' +
                             'which schools have the most need';
        
        // Bind application model to scope
        $scope.Application = Application;  

        // Initialize Diet values
        $scope.Application.Diet['Vegan'] = 'no';
        $scope.Application.Diet['Vegetarian'] = 'no';
        $scope.Application.Diet['Lactose Intolerant'] = 'no';
        $scope.Application.Diet['Gluten-Free'] = 'no';

        // Send button state
        $scope.submitting = false; 

        // Form submission
        $scope.submit = function () {
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.applyForm.$valid) {
                $scope.submitting = true;
                // Send application
                Application.sendApplication()
                    // Success
                    .then(function(){
                        $rootScope.successApply = true; 
                        $location.url('/main');
                    }, function(){
                        $modal.open({
                            templateUrl: 'partials/errorEmailAppModal.html'
                          , controller: 'ErrorEmailAppModalCtrl'
                          , size: 'md'
                        });
                    })
                    .finally(function(){
                        $scope.submitting = false;
                    });
            }
            // There was an error in the form
            else {
                // Focus on the first invalid field
                var applyFormElem       = angular.element('[name="applyForm"]')
                  , firstErrorInputElem = applyFormElem.find('.has-error').first()
                  , documentElem        = angular.element($document);
                
                documentElem.scrollToElementAnimated(firstErrorInputElem, 10);
            }
        };
    }

    /**
     * Register controller
     */

    angular.module('CitrusHack.controllers')
        .controller('ApplyCtrl', ['$scope', '$rootScope', '$modal', '$document', '$location', 'Application', applyCtrl]); 
        
})();
