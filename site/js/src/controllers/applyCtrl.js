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
                                 'be 16 or older to participate. If you are ' +
                                 'under 18, we will have to send you a ' +
                                 'liability waiver for you to sign. :)';

        // Details about transportation
        $scope.transDetail = 'We will be providing transportation for a select ' +
                             'number of schools. This will help us figure out ' +
                             'which schools have the most need';

        // Details about code of conduct
        $scope.cocDetails = 'The MLH Code of Conduct is the set of rules and ' +
                            'behaviours that must be adhered to at our event. ' +
                            'It is very important you take the time to read ' +
                            'through and understand. If you have any ' +
                            'questions, you can reach out to us or MLH ' +
                            'at any time.';

        // Bind application model to scope
        $scope.Application = Application;

        // Initialize Diet values
        $scope.Application.Diet['Vegan'] = 'no';
        $scope.Application.Diet['Vegetarian'] = 'no';
        $scope.Application.Diet['Lactose Intolerant'] = 'no';
        $scope.Application.Diet['Gluten-Free'] = 'no';
        $scope.Application.Diet['Other'] = '';

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
                        $modal.open({
                            templateUrl: 'partials/successAppModal.html'
                          , controller: 'SuccessAppModalCtrl'
                          , size: 'md'
                        });
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
