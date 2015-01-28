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
                Application: '@'
            }
          , link: function (scope, element, attrs, ngModel){
                    ngModel.$render = function (value) {
                        ngModel.$setViewValue(value);
                    };
                    
                    //change event is fired when file is selected
                    element.bind('change',function(event){
                        scope.$apply(function(){
                            // Bind file to scope if it exists
                            if (event.target.files && event.target.files.length >= 1){
                                ngModel.Resume = event.target.files[0];
                            }
                            ngModel.$render(event.target.files[0]);
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
