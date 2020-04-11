"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Tire = /** @class */ (function (_super) {
        __extends(Tire, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Tire() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("tire"), new objects.Vector2(), true) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Tire.prototype._checkBounds = function () {
            if (this.position.y > config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
        };
        Tire.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        // PUBLIC METHODS
        Tire.prototype.Start = function () {
            this.type = enums.GameObjectType.TIRE;
            this.alpha = 0.5; // transparency set to 50%
            this._verticalSpeed = 5;
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.Reset();
        };
        Tire.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Tire.prototype.Reset = function () {
            //this._verticalSpeed = util.Mathf.RandomRange(5, 10); // speed ranges from 5 to 10 px per frame
            this._verticalSpeed = 5;
            //this._horizontalSpeed = util.Mathf.RandomRange(-2, 2); // random horizontal drift
            this._horizontalSpeed = 4;
            this.velocity = new objects.Vector2(this._horizontalSpeed, this._verticalSpeed);
            var randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            var randomY = util.Mathf.RandomRange(-this.height * 2, -this.height);
            this.position = new objects.Vector2(randomX, randomY, this);
        };
        return Tire;
    }(objects.GameObject));
    objects.Tire = Tire;
})(objects || (objects = {}));
//# sourceMappingURL=Tire.js.map