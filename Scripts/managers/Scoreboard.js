"use strict";
var managers;
(function (managers) {
    var Scoreboard = /** @class */ (function () {
        function Scoreboard() {
            this._initialize();
        }
        Object.defineProperty(Scoreboard.prototype, "lives", {
            get: function () {
                return this._lives;
            },
            set: function (v) {
                this._lives = v;
                config.Game.LIVES = this._lives;
                this.livesLable.text = "Lives: " + this._lives;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scoreboard.prototype, "score", {
            get: function () {
                return this._score;
            },
            set: function (v) {
                this._score = v;
                config.Game.SCORE = this._score;
                this.scoreLable.text = "Score: " + this._score;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scoreboard.prototype, "livesLable", {
            get: function () {
                return this._livesLable;
            },
            set: function (v) {
                this._livesLable = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scoreboard.prototype, "scoreLable", {
            get: function () {
                return this._scoreLable;
            },
            set: function (v) {
                this._scoreLable = v;
            },
            enumerable: true,
            configurable: true
        });
        Scoreboard.prototype._initialize = function () {
            this._livesLable = new objects.Label("Lives: 9", "20px", "Consolas", "#FFFF00", 20, 20);
            this._scoreLable = new objects.Label("Score: 9", "20px", "Consolas", "#FFFF00", 490, 20);
            this.Lives = config.Game.LIVES;
            this.Score = config.Game.SCORE;
        };
        return Scoreboard;
    }());
    managers.Scoreboard = Scoreboard;
})(managers || (managers = {}));
//# sourceMappingURL=Scoreboard.js.map