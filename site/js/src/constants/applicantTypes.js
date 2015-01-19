(function() {
    'use strict';

    /**
     * Applicant types constant
     */

    var applicantTypes = ['Hacker', 'Hipster', 'Hustler'];

    /**
     * Register constant
     */

    angular.module('CitrusHack.constants')
        .constant('APPLICANT_TYPES', applicantTypes);
})();
