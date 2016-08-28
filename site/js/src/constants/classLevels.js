(function(){
    'use strict';

    /**
     * Class levels constant
     */

    var classLevels = [ 'Freshman', 'Sophmore', 'Junior', 'Senior', 'Graduate' ];

    /**
     * Register constant
     */

    angular.module("CitrusHack.constants")
        .constant('CLASS_LEVELS', classLevels);
})();
