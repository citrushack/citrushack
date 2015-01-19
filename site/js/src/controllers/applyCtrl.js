(function(){
    'use strict';

    /**
     * Apply controller
     */

    function applyCtrl ($scope, $rootScope, Application) {
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

        // School person attends
        $scope.school = '';
        
        // Bind application model to scope
        angular.forEach(Application, function(value, key) {
            $scope[key] = value;  
        });

        // Initialize Diet values
        angular.forEach($rootScope.DIETARY_RESTRICTIONS, function(value, key) {
            $scope.Diet[value] = 'no';
        });

        // Form submission
        $scope.submit = function () {
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.applyForm.$valid) {
                // Send application
                Application.sendApplication();
            }
        };
    }

    /**
     * Register controller
     */

    angular.module('CitrusHack.controllers')
        .controller('ApplyCtrl', ['$scope', '$rootScope', 'Application', applyCtrl]); 
        
})();
