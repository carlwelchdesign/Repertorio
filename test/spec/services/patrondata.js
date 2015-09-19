'use strict';

describe('Service: PatronData', function () {

  // load the service's module
  beforeEach(module('repertorioApp'));

  // instantiate service
  var PatronData;
  beforeEach(inject(function (_PatronData_) {
    PatronData = _PatronData_;
  }));

  it('should do something', function () {
    expect(!!PatronData).toBe(true);
  });

});
