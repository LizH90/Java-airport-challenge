describe('Plane', function() {
  var plane;
  var weather;

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
    plane = new Plane(weather,'Gatwick');
    expect(function() {plane.takeoff()}).toThrow("Too stormy to take off");
    expect(plane.airport).toBe('Gatwick');
  });

  it('prevents landing when weather is stormy', function () {
    weather = { isStormy: function() {
      return true;
    }};
    plane = new Plane(weather, null);
    expect(function() {plane.land('Berlin')}).toThrow("Too stormy to land");
    expect(plane.airport).toBe(null);
  });
});
