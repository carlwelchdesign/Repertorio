'use strict';
// hides featured image if can't be found
angular.module('repertorioApp').directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        if (attrs.src !== attrs.errSrc) {
           element.hide();
        }
      });
    }
  };
});