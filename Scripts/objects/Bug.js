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
    var Bug = /** @class */ (function (_super) {
        __extends(Bug, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Bug() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("bug"), 0, 0, true) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Bug.prototype._checkBounds = function () {
            // left boundary
            if (this.position.x <= this.halfWidth) {
                this.position = new objects.Vector2(this.halfWidth, this.position.y);
            }
            // right boundary
            if (this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth) {
                this.position = new objects.Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y);
            }
        };
        Bug.prototype._move = function () {
            var newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, 0.05);
            this.position = new objects.Vector2(newPositionX, this._verticalPosition);
        };
        // PUBLIC METHODS
        Bug.prototype.Start = function () {
            this.type = enums.GameObjectType.BUG;
            this._verticalPosition = 430; // locked to the bottom of the screen
        };
        Bug.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Bug.prototype.Reset = function () {
        };
        return Bug;
    }(objects.GameObject));
    objects.Bug = Bug;
})(objects || (objects = {}));
//# sourceMappingURL=Bug.js.map