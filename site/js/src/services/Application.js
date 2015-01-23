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
            this.Gender   = '';
            this.Email    = '';
            this.School   = '';
            this.ClassLvl = '';
            this.Type     = '';
            this.Ride     = '';
            this.Diet     = {};
            this.Phone    = '';
            this.Age      = 0;
            this.TShirt   = '';
            this.Github   = '';
            this.Hardware = '';
            this.Resume   = '';
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

