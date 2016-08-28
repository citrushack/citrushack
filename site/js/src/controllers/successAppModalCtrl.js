(function(){
    'use strict';

    /**
     * Success app modal controller
     */

     function successAppModalCtrl ($scope, $modalInstance, $location) {
        // Close modal
        $scope.close = function () {
            $modalInstance.close();
            $location.url('/main');
        };
     }

     /**
      * Register controller
      */

     angular.module('CitrusHack.controllers')
        .controller('SuccessAppModalCtrl', ['$scope', '$modalInstance', , '$location', successAppModalCtrl]);
})();
