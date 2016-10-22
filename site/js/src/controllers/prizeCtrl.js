(function(){
    'use strict';

    /**
     * Prizes controller
     */

    function prizeCtrl ($scope) {
        // Name of the view
        $scope.pageView = 'prizes-view';
    }

    /**
     * Register controller
     */

    angular.module('CitrusHack.controllers')
        .controller('PrizesCtrl', ['$scope', prizeCtrl]);

})();
