function Weather() {
}
Weather.prototype.isStormy = function() {
  if ( Math.random() < 0.85 ) {
    return false;
  };
  return true;
};
