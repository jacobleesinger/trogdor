(function() {
  if(typeof Trogdor === "undefined"){
    window.Trogdor = {};
  }

  var Dragon = Trogdor.Dragon = function(options) {
    options.pos = options.pos;
    options.vel = options.vel || Trogdor.Util.randomVec(Dragon.SPEED);
    options.radius = Dragon.RADIUS;
    options.color = Dragon.COLOR;
    Trogdor.Thing.call(this, options)

  };

  Trogdor.Util.inherits(Dragon, Trogdor.Thing);

  Dragon.COLOR = "#008000";
  Dragon.RADIUS = 25;
  Dragon.SPEED = 0;
})();
