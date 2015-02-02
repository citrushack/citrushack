(function(){
    'use strict';

    /**
     * Error email app modal controller
     */

     function errorEmailAppModalCtrl ($scope, $modalInstance) {
        // Close modal
        $scope.close = function () {
            $modalInstance.close();
        };
     }

     /**
      * Register controller
      */

     angular.module('CitrusHack.controllers')
        .controller('ErrorEmailAppModalCtrl', ['$scope', '$modalInstance', errorEmailAppModalCtrl]);
})();
