(function(){
    'use strict';

    /**
     * Main controller
     */

    function mainCtrl ($scope) {
        // Name of the view
        $scope.pageView = 'main-view';
    }

    /**
     * Register controller
     */

    angular.module('CitrusHack.controllers')
        .controller('MainCtrl', ['$scope', mainCtrl]);

})();
