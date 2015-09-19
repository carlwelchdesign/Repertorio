'use strict';

describe('Directive: footerBlock', function () {

  // load the directive's module
  beforeEach(module('repertorioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<footer-block></footer-block>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the footerBlock directive');
  }));
});
