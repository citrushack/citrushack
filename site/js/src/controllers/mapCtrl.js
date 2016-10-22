(function(){
    'use strict';

    /**
     * Map View controller
     */

     function mapCtrl ($scope) {
         // Name of the view
         $scope.pageView = 'map-view';
     }

     /**
      * Register controller
      */

     angular.module('CitrusHack.controllers')
         .controller('MapCtrl', ['$scope', mapCtrl])

})();
