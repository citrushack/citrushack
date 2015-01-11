(function(){
    'use strict';

    /**
     * Main controller
     */

    function mainCtrl ($scope) {
        // Name of the view
        $scope.pageView = 'main-view';
        // Security breach elaboration
        $scope.securityElaborate = 'Although your project could be security related';
        // Project ideas explanation
        $scope.projectIdeasType = 'These projects would be a mix of humanitarian and utility applications'; 
    }

    /**
     * Register controller
     */

    angular.module('CitrusHack.controllers')
        .controller('MainCtrl', ['$scope', mainCtrl]);

})();
