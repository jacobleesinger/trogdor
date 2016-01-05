(function() {
  if(typeof Trogdor === "undefined"){
    window.Trogdor = {};
  }

  var Dragon = Trogdor.Dragon = function(options) {
    options.pos = options.pos;
    options.vel = options.vel;
    options.radius = Dragon.RADIUS;
    options.color = Dragon.COLOR;

  };
})
