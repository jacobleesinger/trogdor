(function() {
  if(typeof Trogdor === "undefined") {
    window.Trogdor = {};
  }

  var Enemy = Trogdor.Enemy = function(options) {
    options.pos = options.pos;
    options.vel = options.vel || Trogdor.Util.randomVec(Enemy.SPEED);
    options.radius = Enemy.RADIUS;
    options.color = options.color;
    Trogdor.Thing.call(this, options)
  };

  Trogdor.Util.inherits(Enemy, Trogdor.Thing);

  Enemy.SPEED = 0;
  Enemy.RADIUS = 25;


})();
