(function(){
 'use strict';

 /**
  * Live controller
  */

 function liveCtrl ($scope) {
 // Name of the view
    $scope.pageView = 'live-view';
 }

 /**
  * Register controller
  */

 angular.module('CitrusHack.controllers')
    .controller('LiveCtrl', ['$scope', liveCtrl]);

})();
