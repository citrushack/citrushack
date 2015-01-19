(function(){
    'use strict';

    /**
     * Genders constants
     */

    var genders = ['Male', 'Female', 'Other/Decline to answer'];

    /**
     * Register constant
     */

    angular.module('CitrusHack.constants')
        .constant('GENDERS', genders);
})();
