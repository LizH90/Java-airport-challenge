function Plane(weather = new Weather(), airport) {
  this.weather = weather;
  this.airport = airport;
  // airport: "Gatwick";
};




Plane.prototype.land = function(airport) {
  this.airport = airport;
  console.log(this.airport);
};

Plane.prototype.takeoff = function() {
  console.log(this.weather.isStormy());
  if (this.weather.isStormy()) {
    throw "Too stormy to take off";
  };
  this.airport = null;
  console.log(this.airport);

};

// Plane.prototype.weather = function() {
//   this.airport = null;
//   console.log(this.airport);
// };
