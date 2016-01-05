(function() {
  if(typeof Trogdor === "undefined") {
    window.Trogdor = {};
  }

  var Game = Trogdor.Game = function() {
    this.things = [];
    this.addInitialThings();
  }

  Game.NUM_HOUSES = 2;
  Game.NUM_KNIGHTS = 2;
  Game.DIM_X = 1000;
  Game.DIM_Y = 600;
  Game.BG_COLOR = "#EEEEEE";

  Game.prototype.addInitialThings = function () {
    this.addKnights();
    this.addHouses();
    this.addDragon();
  };

  Game.prototype.addKnights = function () {

    for (var i = 0; i < Game.NUM_KNIGHTS; i++) {
      this.things.push(new Trogdor.Knight({
        pos: this.randomPosition(),
        game: this
      }));
    }
  };

  Game.prototype.addHouses = function () {
    for (var i = 0; i < Game.NUM_HOUSES; i++) {
      this.things.push(new Trogdor.House({
        pos: this.randomPosition(),
        game: this
      }));
    }
  };

  Game.prototype.addDragon = function () {
    this.things.push(new Trogdor.Dragon({
      pos: this.randomPosition(),
      game: this
    }));
  };

  Game.prototype.draw = function () {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.things.forEach(function(thing) {
      thing.draw(ctx);
    });
  };



  Game.prototype.randomPosition = function () {
    return [
      Math.random() * Game.DIM_X,
      Math.random() * Game.DIM_Y
    ];
  };



})();
