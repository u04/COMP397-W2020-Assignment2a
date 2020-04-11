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
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            this._ocean = new objects.Ocean();
            this._bug = new objects.Bug();
            this._food = new objects.Food();
            this._tireNumber = config.Game.TIRE_NUM;
            this._tires = new Array();
            // create an array of tire objects
            for (var index = 0; index < this._tireNumber; index++) {
                this._tires[index] = new objects.Tire();
            }
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._ocean.Update();
            this._food.Update();
            this._bug.Update();
            managers.Collision.AABBCheck(this._bug, this._food);
            this._tires.forEach(function (tire) {
                tire.Update();
                managers.Collision.AABBCheck(_this._bug, tire);
            });
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this._ocean);
            this.addChild(this._food);
            this.addChild(this._bug);
            this._tires.forEach(function (tire) {
                _this.addChild(tire);
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map