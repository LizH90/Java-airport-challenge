function Plane(airport) {
  this.airport = airport;

  // airport: "Gatwick";
};


Plane.prototype.land = function(airport) {
  this.airport = airport;
  console.log(this.airport);
};

Plane.prototype.takeoff = function() {
  this.airport = null;
  console.log(this.airport);
};
