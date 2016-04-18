(function(){
    'use strict';

    /**
     * Create main app
     */
     
    angular.module('CutieHack', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'ui.bootstrap.showErrors', 'duScroll', 'angular-loading-bar', 'sticky', 'CutieHack.controllers', 'CutieHack.directives', 'CutieHack.services'])
        .run(['$rootScope', '$location', function($rootScope, $location){
            // Make location available in rootScope
            $rootScope.location = $location;
            // Make FB init available in rootScope
            $rootScope.FBInit = function () {
                FB.XFBML.parse();
            };
            
            // Flag for showing success registration modal
            $rootScope.successApply = false;
        }])
        // Configure angular-show-errors to also show
        // valid form entries
        .config(['showErrorsConfigProvider', function(showErrorsConfigProvider) {
          showErrorsConfigProvider.showSuccess(true);
        }]);

    angular.module('CutieHack.controllers', []);
    angular.module('CutieHack.directives', []);
    angular.module('CutieHack.services', []);
})();


(function(){
    'use strict';

    /**
     * Fetch main application
     */

    var app = angular.module('CutieHack');

    /**
     * Sets states/urls
     */

    function setRoutes($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('main', {
                url: '/main'
              , templateUrl: '../../partials/main.html'
              , controller: 'MainCtrl'
            });

        // Go to home on unmatched route
        $urlRouterProvider.otherwise('/main');
    }

    /**
     * Configure app with route setter
     *
     * Angular dependancy injection
     *
     */

    app.config(['$stateProvider', '$urlRouterProvider', setRoutes]); 

})();

(function(){
    'use strict';

    /**
     * Parallax scrolling directive
     */

    function parallax ($window){
        
        /**
         * Directive syntax
         */
        
        return function (scope, element, attrs) {
            var posY = 0
              , posX = 0
              , speed = attrs.chParallaxSpeed || 5;

            var windowEl = angular.element($window);
 
            // Ensure element has background properties
            element.css({
                backgroundPosition: posX + 'px ' + posY + 'px'
              , backgroundSize: 'cover'
              , backgroundRepeat: 'no-repeat'
              , backgroundAttachment: 'fixed'
            });

            // Update position function
            function updateY () {
                var offset       = element.offset().top
                  , height       = element.outerHeight()
                  , scrollTop    = windowEl.scrollTop()
                  , windowHeight = windowEl.height();

                if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) 
                    return;
                
                posY = Math.round((offset - scrollTop) / speed);
                
                element.css({
                    backgroundPosition: posX + 'px ' + posY + 'px'
                });
            }

            // Activate directive only if window is at least
            // col-md width
            if (windowEl.width() >= 992)
            {
                windowEl.on('scroll', updateY);
            }
            
            // Clean up
            element.on('destroy', function (){
                windowEl.off('scroll', updateY);
            });
        };
    }

    /**
     * Register directive
     */

    angular.module('CutieHack.directives')
        .directive('chParallax', ['$window', parallax]);

})();


(function(){
    'use strict';

    /**
     * Main controller
     */

    function mainCtrl ($scope, $rootScope, $modal, Contact) {
        // Name of the view
        $scope.pageView = 'main-view';
        // Security breach elaboration
        $scope.securityElaborate = 'Although your project could be security related';
        // Project ideas explanation
        $scope.projectIdeasType = 'These projects would be a mix of humanitarian and utility applications'; 
        // Bind contact
        $scope.Contact = Contact;
        // See if we have sent the contact form
        $scope.sentForm = false;

        // Send contact form
        $scope.sendMessage = function () {
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.contactForm.$valid) {
                // Send the form
                Contact.sendMessage()
                    .finally(function(){
                        $scope.sentForm = true;
                    });
            }
        };
    }

    /**
     * Register controller
     */

    angular.module('CutieHack.controllers')
        .controller('MainCtrl', ['$scope', '$rootScope', '$modal', 'Contact', mainCtrl]);

})();

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

    angular.module('CutieHack.services')
        .factory('Contact', ['$http', '$q', contactFactory]);

})();

