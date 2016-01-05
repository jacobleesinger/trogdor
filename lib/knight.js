(function() {
  if(typeof Trogdor === "undefined") {
    window.Trogdor = {};
  }

  var Knight = Trogdor.Knight = function(options) {
    options.pos = options.pos;
    options.vel = options.vel || Trogdor.Util.randomVec(Knight.SPEED);
    options.radius = Knight.RADIUS;
    options.color = Knight.COLOR;
    Trogdor.Enemy.call(this, options);
  };

  Trogdor.Util.inherits(Knight, Trogdor.Enemy);

  Knight.COLOR = "#8B4513";
  Knight.RADIUS = 25;
  Knight.SPEED = 0;
})();
