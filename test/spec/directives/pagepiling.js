'use strict';

describe('Directive: pagePiling', function () {

  // load the directive's module
  beforeEach(module('repertorioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<page-piling></page-piling>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pagePiling directive');
  }));
});
