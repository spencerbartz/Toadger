"use strict";

var _Sprite = require("Sprite");

var _Sprite2 = _interopRequireDefault(_Sprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("Initiating Game Engine"); /*jshint esversion: 6 */

var s = new _Sprite2.default("images/car1.gif");
console.log(s.toString());
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*jshint esversion: 6 */

/*
* Class Sprite
* */

var Sprite = function () {
  function Sprite(img) {
    _classCallCheck(this, Sprite);

    this.img = img;
    this.x = 0;
    this.y = 0;
  }

  _createClass(Sprite, [{
    key: "getX",
    value: function getX() {
      return this.x;
    }
  }, {
    key: "getY",
    value: function getY() {
      return this.y;
    }
  }, {
    key: "move",
    value: function move(newX, newY) {
      this.x = newX;
      this.y = newY;
    }
  }, {
    key: "toSTring",
    value: function toSTring() {
      console.log("Hey I'm a sprite");
    }
  }]);

  return Sprite;
}();

exports.default = Sprite;
