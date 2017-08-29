describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane('Gatwick');
  });

  it('should respond to land', function () {
    plane.takeoff();
    plane.land('Gatwick');
    expect(plane.airport).toBe('Gatwick');
  });

  it('should not be in the airport after takeoff', function () {
    plane.takeoff();
    expect(plane.airport).toBe(null);
  });

});
