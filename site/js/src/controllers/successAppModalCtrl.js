(function(){
    'use strict';

    /**
     * Success app modal controller
     */

     function successAppModalCtrl ($scope, $modalInstance) {
        // Close modal
        $scope.close = function () {
            $modalInstance.close();
        };
     }

     /**
      * Register controller
      */

     angular.module('CitrusHack.controllers')
        .controller('SuccessAppModalCtrl', ['$scope', '$modalInstance', successAppModalCtrl]);
})();
