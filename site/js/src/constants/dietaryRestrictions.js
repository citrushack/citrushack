(function() {
    'use strict';

    /**
     * Dietary restrictions constant
     */

    var dietaryRestrictions = ['Vegetarian', 'Vegan', 'Lactose Intolerant', 'Gluten-Free'];

    /**
     * Register constant
     */

    angular.module('CitrusHack.constants')
        .constant('DIETARY_RESTRICTIONS', dietaryRestrictions);
})();
