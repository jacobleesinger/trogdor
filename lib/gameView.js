(function() {
  if(typeof Trogdor === "undefined") {
    window.Trogdor = {};
  }

  var GameView = Trogdor.GameView = function (game, ctx) {
    this.ctx = ctx;
    this.game = game;
  };

  GameView.prototype.start = function() {
    setInterval(function() {
      this.game.draw(GameView.ctx);
    }.bind(this), 20);
  };

})();
