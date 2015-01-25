(function(){
    'use strict';

    /**
     * ScrollTo directive
     */

    function scrollTo ($window, $document, $timeout) {
    
        /**
         * Directive syntax
         */

        return function (scope, element, attrs) {
            var windowEl = angular.element($window)
              , thisEl   = angular.element(element[0])
              , targetId = attrs.chScrollTo
              , targetEl = null;

            // Directive was not given a string
            if (targetId === '') {
                throw new Error('You need to supply a string to ch-scroll-to');
            }
            
            function setListeners () {
                // Scroll to targetId on click
                thisEl.on('click', function () {
                    angular.element('html, body').animate({
                        scrollTop: targetEl.offset().top
                    }, 1000);
                });
                
                // Clean up
                element.on('destroy', function(){
                    thisEl.off();
                });
            }

            // Recursive function which calls timeout, retries times till
            // we either find targetId, or until retries = 0
            // This is needed in order to wait for the DOM to load
            var retries = 10;
            function findAndSetListeners (chances) {
                $timeout(function(){
                    targetEl = angular.element(targetId);
                    if (targetEl.length === 0) {
                        // Target element not found yet and gone
                        // through all our chances
                        if (chances === 0){
                            throw new Error("Id '" + targetId + "' not found");
                        }
                        // Try again
                        findAndSetListeners(chances - 1);
                    }
                    else {
                        // Element found, set listeners
                        setListeners();

                        // Exit recursion
                        return;
                   }
                }, 100);
            }

            // Wait till the DOM loads in order to set the listeners
            findAndSetListeners(retries);
        };
    }

    /**
     * Register directive
     */

    angular.module('CitrusHack.directives')
        .directive('chScrollTo', ['$document', '$window', '$timeout', scrollTo]);

})();

