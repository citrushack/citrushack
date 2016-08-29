(function () {
    'use strict';

    /**
     * Application factory
     */

    function applicationFactory ($http, $q){

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
            this.First    = '';
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
            this.MLH      = '';
            this.Resume   = undefined;
        }

        application.prototype.sendApplication = function () {
            var deferred = $q.defer();

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
                deferred.resolve();
            })
            .error(function(){
                deferred.reject();
            });

            return deferred.promise;
        };

        return new application ();
    }

    /**
     * Register factory
     */

    angular.module('CitrusHack.services')
        .factory('Application', ['$http', '$q', applicationFactory]);

})();

