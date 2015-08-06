(function() {
    'use strict';

    /**
     * Contact factory
     */

    function contactFactory ($http, $q){
        
        /**
         * Contact object
         */

        function contact () {
            this.Email = '';
            this.Subject = '';
            this.Message = '';
        }

        contact.prototype.sendMessage = function () {
            var deferred = $q.defer();

            $http({
                method: 'POST'
              , url: '/mail.php'
              , data: JSON.stringify(this)
            })
            .success(function(){
                deferred.resolve();
            })
            .error(function(){
                deferred.reject();
            });

            return deferred.promise;
        };

        return new contact ();
    }

    /**
     * Register factory
     */

    angular.module('CitrusHack.services')
        .factory('Contact', ['$http', '$q', contactFactory]);

})();

