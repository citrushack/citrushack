(function () {
    'use strict';

    /**
     * Application factory
     */

    function applicationFactory ($http){
            
        /**
         * Application object
         */

        function application () {
            
            // Only value properties should
            // be here
            this.Fname    = ''; 
            this.Lname    = '';
            this.gender   = '';
            this.email    = '';
            this.school   = '';
            this.classLvl = '';
            this.type     = '';
            this.diet     = [];
            this.phone    = '';
            this.age      = 0;
            this.github   = '';
            this.hardware = '';
        }  

        application.prototype.sendApplication = function () {
            // Build JSON data string for PHP backend
            var dataEncoded = 'JSONFile=' + JSON.stringify(this);
            $http.post('SERVER', dataEncoded)
                .success(function(){
                    return true;
                })
                .error(function(){
                    return false;
                });
        };

        return new application ();
    }
 
    /**
     * Register factory
     */

    angular.module('CitrusHack.services')
        .factory('Application', ['$http', applicationFactory]);

})();

