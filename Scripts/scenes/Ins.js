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
    var Ins = /** @class */ (function (_super) {
        __extends(Ins, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Ins() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Ins.prototype.Start = function () {
            this._insLabel = new objects.Label("move mouse left or right to move ant left or right, avoid tires, try to eat food", "12px", "Consolas", "#FFFF00", 320, 180, true);
            this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 230, true);
            this._ocean = new objects.Ocean();
            this.Main();
        };
        Ins.prototype.Update = function () {
            this._ocean.Update();
        };
        Ins.prototype.Main = function () {
            this.addChild(this._ocean);
            this.addChild(this._insLabel);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                config.Game.SCENE = scenes.State.START;
            });
        };
        return Ins;
    }(objects.Scene));
    scenes.Ins = Ins;
})(scenes || (scenes = {}));
//# sourceMappingURL=Ins.js.map