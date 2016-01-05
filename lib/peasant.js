(function() {
  if(typeof Trogdor === "undefined") {
    window.Trogdor = {};
  }

  var Peasant = Trogdor.Peasant = function(options) {
    options.pos = options.pos;
    options.vel = options.vel || Trogdor.Util.randomVec(Peasant.SPEED);
    options.radius = Peasant.RADIUS;
    options.color = Peasant.COLOR;
    Trogdor.Enemy.call(this, options);
  };

  Trogdor.Util.inherits(Peasant, Trogdor.Enemy);

  Peasant.COLOR = "#8B4513";
  Peasant.RADIUS = 25;
  Peasant.SPEED = 0;
})();
