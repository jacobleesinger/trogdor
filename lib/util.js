(function(){
  if(typeof Trogdor = "undefined") {
    window.Trogdor = {};
  }

  var Util = Trogdor.Util = {};

  var inherits = Util.inherits = function (ChildClass, ParentClass) {
   function Surrogate () { this.constructor = ChildClass };
   Surrogate.prototype = ParentClass.prototype;
   ChildClass.prototype = new Surrogate();
  };

  var randomVec = Util.randomVec = function(length) {
    var deg = 2 * Math.PI * Math.random();

    return [Math.sin(deg), Math.cos(deg)];
  };
  
})();
