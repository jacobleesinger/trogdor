(function() {
  if(typeof Trogdor === "undefined") {
    window.Trogdor = {};
  }

  var GameView = Trogdor.GameView = function (game, ctx) {
    this.ctx = ctx;
    this.game = game;
  };

  GameView.prototype.start = function() {
    setInteral(function() {
      this.game.draw(Gameview.ctx);
    }.bind(this), 20);
  };
  
})();
