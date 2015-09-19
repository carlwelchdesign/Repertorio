'use strict';
angular.module('repertorioApp').directive('vimeo', function() {
    return {
      restrict: 'E',
      replace: true,
    
      template: '<iframe id="{{id}}" height="{{height}}" width="{{width}}"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
      link: function postLink(scope, element, attrs) {
        var url = 'http://player.vimeo.com/video/' + attrs.vid;
        console.log('attrs.vid: '+attrs.vid);
        element.attr('src', url);

        var iframe = element[0],
        player = $f(iframe);

      }
    };
  });