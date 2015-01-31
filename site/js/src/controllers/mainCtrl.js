(function(){
    'use strict';

    /**
     * Main controller
     */

    function mainCtrl ($scope, $rootScope, $modal) {
        // Name of the view
        $scope.pageView = 'main-view';
        // Security breach elaboration
        $scope.securityElaborate = 'Although your project could be security related';
        // Project ideas explanation
        $scope.projectIdeasType = 'These projects would be a mix of humanitarian and utility applications'; 
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
    }

    /**
     * Register controller
     */

    angular.module('CitrusHack.controllers')
        .controller('MainCtrl', ['$scope', '$rootScope', '$modal', mainCtrl]);

})();
