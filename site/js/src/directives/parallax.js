(function(){
    'use strict';

    /**
     * Parallax scrolling directive
     */

    function parallax ($window, $document){
        
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
                posY = -(windowEl.scrollTop() / speed);
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

    angular.module('CitrusHack.directives')
        .directive('chParallax', ['$window', '$document', parallax]);

})();
