(function(){
    'use strict';

    /**
     * Create main app
     */
     
    angular.module('CitrusHack', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'ui.bootstrap.showErrors', 'duScroll', 'angular-loading-bar', 'CitrusHack.controllers', 'CitrusHack.directives', 'CitrusHack.constants', 'CitrusHack.services'])
        .run(['$rootScope', '$location', 'SCHOOLS', 'CLASS_LEVELS', 'APPLICANT_TYPES', function($rootScope, $location, SCHOOLS, CLASS_LEVELS, APPLICANT_TYPES){
            // Make constant accessible in partials
            $rootScope.SCHOOLS = SCHOOLS;
            $rootScope.CLASS_LEVELS = CLASS_LEVELS;
            $rootScope.APPLICANT_TYPES = APPLICANT_TYPES;
            // Make location available in rootScope
            $rootScope.location = $location;
            // Make FB init available in rootScope
            $rootScope.FBInit = function () {
                FB.XFBML.parse();
            };
        }])
        // Configure angular-show-errors to also show
        // valid form entries
        .config(['showErrorsConfigProvider', function(showErrorsConfigProvider) {
          showErrorsConfigProvider.showSuccess(true);
        }]);

    angular.module('CitrusHack.controllers', []);
    angular.module('CitrusHack.directives', []);
    angular.module('CitrusHack.constants', []);
    angular.module('CitrusHack.services', []);
})();

