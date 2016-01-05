(function() {
  if(typeof Trogdor === "undefined") {
    window.Trogdor = {};
  }

  var Enemy = Trogdor.Enemy = function(options) {
    options.pos = options.pos;
    options.vel = options.vel;
    options.radius = options.radius;
    options.color = options.color;
    Trogdor.Thing.call(this, options)
  };

  Trogdor.Util.inherits(Enemy, Trogdor.Thing);




})();
