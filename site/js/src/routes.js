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
            .state('main', {
                url: '/main'
              , templateUrl: '../../partials/main.html'
              , controller: 'MainCtrl'
            });

        // Go to home on unmatched route
        $urlRouterProvider.otherwise('/main');
    }

    /**
     * Configure app with route setter
     *
     * Angular dependancy injection
     *
     */

    app.config(['$stateProvider', '$urlRouterProvider', setRoutes]);

})();
