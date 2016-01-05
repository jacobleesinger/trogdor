(function() {
  if(typeof Trogdor === "undefined") {
    window.Trogdor = {};
  }

  var House = Trogdor.House = function(options) {
    options.pos = options.pos;
    options.vel = Trogdor.Util.randomVec(House.SPEED);
    options.radius = House.RADIUS;
    options.color = House.COLOR;
    Trogdor.Thing.call(this, options);
  };

  Trogdor.Util.inherits(House, Trogdor.Thing);

  House.RADIUS = 35;
  House.COLOR = "#CCCCCC";
  House.SPEED = 0;
  
})();
