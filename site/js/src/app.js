(function(){
    'use strict';

    /**
     * Create main app
     */
     
    angular.module('CitrusHack', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'ui.bootstrap.showErrors', 'CitrusHack.controllers', 'CitrusHack.directives', 'CitrusHack.constants', 'CitrusHack.services'])
        .run(['$rootScope', 'SCHOOLS', 'CLASS_LEVELS', 'APPLICANT_TYPES', 'GENDERS', 'DIETARY_RESTRICTIONS', function($rootScope, SCHOOLS, CLASS_LEVELS, APPLICANT_TYPES, GENDERS, DIETARY_RESTRICTIONS){
            // Make constant accessible in partials
            $rootScope.SCHOOLS = SCHOOLS;
            $rootScope.CLASS_LEVELS = CLASS_LEVELS;
            $rootScope.APPLICANT_TYPES = APPLICANT_TYPES;
            $rootScope.GENDERS = GENDERS;
            $rootScope.DIETARY_RESTRICTIONS = DIETARY_RESTRICTIONS;
        }]);

    angular.module('CitrusHack.controllers', []);
    angular.module('CitrusHack.directives', []);
    angular.module('CitrusHack.constants', []);
    angular.module('CitrusHack.services', []);
})();

