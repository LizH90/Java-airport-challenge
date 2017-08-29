describe('Plane', function() {
  var plane;
  var weather;
  var plane2;

  // beforeEach(function() {
  //   plane = new Plane('Gatwick');
  // });

  it('should respond to land', function () {
    weather = { isStormy: function() {
      return false;
    }};
    plane = new Plane(weather, 'Gatwick');
    plane.takeoff();
    plane.land('Gatwick');
    expect(plane.airport).toBe('Gatwick');
  });

  it('should not be in the airport after takeoff', function () {
    weather = { isStormy: function() {
      return false;
    }};
    plane = new Plane(weather, 'Gatwick');
    plane.takeoff();
    expect(plane.airport).toBe(null);
  });

  it('when stormy should raise error when trying to take off', function () {
    weather = { isStormy: function() {
      return true;
    }};
    plane2 = new Plane(weather,'Gatwick');
    expect(function() {plane2.takeoff()}).toThrow("Too stormy to take off");
    expect(plane2.airport).toBe('Gatwick');
  });

});
