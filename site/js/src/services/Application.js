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
            this.Resume   = undefined;
        }  

        application.prototype.sendApplication = function () {
            $http({
                method: 'POST'
              , url: '/apply.php'
              , headers: {'Content-Type': undefined}
              , data: { scope: this, file: this.Resume } 
              , transformRequest: function (data){
                    var formData = new FormData();
                    // Append Resume file to formData
                    formData.append("Resume", data.file);
                    // Append scope to formData
                    formData.append("Scope", JSON.stringify(data.scope));
                    return formData;
                }
            })
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

