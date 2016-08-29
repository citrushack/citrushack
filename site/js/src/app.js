(function(){
    'use strict';

    /**
     * Create main app
     */

    angular.module('CitrusHack', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'ui.bootstrap.showErrors', 'duScroll', 'angular-loading-bar', 'sticky', 'CitrusHack.constants', 'CitrusHack.controllers', 'CitrusHack.directives', 'CitrusHack.services'])
        .value('duScrollOffset', 60)
        .run(['$rootScope', '$location', 'SCHOOLS', 'CLASS_LEVELS', 'APPLICANT_TYPES', function($rootScope, $location, SCHOOLS, CLASS_LEVELS, APPLICANT_TYPES) {
            // Make constants available
            $rootScope.SCHOOLS = SCHOOLS;
            $rootScope.CLASS_LEVELS = CLASS_LEVELS;
            $rootScope.APPLICANT_TYPES = APPLICANT_TYPES;
            // Make location available in rootScope
            $rootScope.location = $location;
            // Make FB init available in rootScope
            $rootScope.FBInit = function () {
                FB.XFBML.parse();
            };

            // Flag for showing success registration modal
            $rootScope.successApply = false;
        }])
        // Configure angular-show-errors to also show
        // valid form entries
        .config(['showErrorsConfigProvider', function(showErrorsConfigProvider) {
          showErrorsConfigProvider.showSuccess(true);
        }]);

    angular.module('CitrusHack.constants', []);
    angular.module('CitrusHack.controllers', []);
    angular.module('CitrusHack.directives', []);
    angular.module('CitrusHack.services', []);
})();

