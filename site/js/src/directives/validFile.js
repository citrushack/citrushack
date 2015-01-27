(function(){
    'use strict';

    // Directive to make file input work
    // Adapted from http://stackoverflow.com/questions/18383446/how-to-validate-form-with-inputtype-file-in-angularjs

    function resumeUpload (){
        
        /**
         * Directive syntax
         */

        return {
            restrict: 'A'
          , require: '^ngModel'
          , scope: {
                Resume: '@'
            }
          , link: function (scope, element, attrs, ngModel){
                    ngModel.$render = function () {
                        ngModel.$setViewValue(element.val());
                    };
                    
                    //change event is fired when file is selected
                    element.bind('change',function(event){
                        scope.$apply(function(){
                            ngModel.$setViewValue(element.val());
                            
                            // Bind file to scope if it exists
                            if (event.target.files && event.target.files.length >= 1)
                                ngModel.Resume = event.target.files[0];

                            ngModel.$render();
                        });
                    });
                 }
        };
    } 

    /**
     * Register directive
     */

    angular.module('CitrusHack.directives')
        .directive('resumeUpload', resumeUpload);

})();
