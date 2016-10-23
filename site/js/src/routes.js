(function(){
    'use strict';

    /**
     * Fetch main application
     */

    var app = angular.module('CitrusHack');

    /**
     * Sets states/urls
     */

    function setRoutes($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('live', {
                url: '/live',
                templateUrl: '../../partials/live.html',
                controller: 'LiveCtrl'
            })
            .state('main', {
                url: '/main'
              , templateUrl: '../../partials/main.html'
              , controller: 'MainCtrl'
            })
            .state('timeline', {
                url: '/schedule',
                templateUrl: '../../partials/schedule.html',
                controller: 'ScheduleCtrl'
            })
            .state('map', {
                url: '/map',
                templateUrl: '../../partials/map.html',
                controller: 'MapCtrl'
            })
            .state('prizes', {
                url: '/prizes',
                templateUrl: '../../partials/prizes.html',
                controller: 'PrizesCtrl'
            });

        // Go to home on unmatched route
        $urlRouterProvider.otherwise('/live');
    }

    /**
     * Configure app with route setter
     *
     * Angular dependancy injection
     *
     */

    app.config(['$stateProvider', '$urlRouterProvider', setRoutes]);

})();
