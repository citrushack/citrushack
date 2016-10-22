(function(){
 'use strict';

 /**
  * Timeline controller
  */

 function scheduleCtrl ($scope, $rootScope) {
    // Name of the view
    $scope.pageView = 'timeline-view';
 }

 angular.module('CitrusHack.controllers')
    .controller('ScheduleCtrl', ['$scope', '$rootScope', scheduleCtrl]);
})();
