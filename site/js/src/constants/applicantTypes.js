(function() {
    'use strict';

    /**
     * Applicant types constant
     */

    var applicantTypes = ['Hacker', 'Hustler', 'Designer'];

    /**
     * Register constant
     */

    angular.module('CitrusHack.constants')
        .constant('APPLICANT_TYPES', applicantTypes);
})();
