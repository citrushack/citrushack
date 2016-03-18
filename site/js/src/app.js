(function(){
    'use strict';

    /**
     * Create main app
     */
     
    angular.module('CutieHack', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'ui.bootstrap.showErrors', 'duScroll', 'angular-loading-bar', 'sticky', 'CutieHack.controllers', 'CutieHack.directives', 'CutieHack.services'])
        .run(['$rootScope', '$location', function($rootScope, $location){
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

    angular.module('CutieHack.controllers', []);
    angular.module('CutieHack.directives', []);
    angular.module('CutieHack.services', []);
})();

