"use strict";
var managers;
(function (managers) {
    var Scoreboard = /** @class */ (function () {
        function Scoreboard() {
            this._initialize();
        }
        Object.defineProperty(Scoreboard.prototype, "Lives", {
            get: function () {
                return this._lives;
            },
            set: function (v) {
                this._lives = v;
                config.Game.LIVES = this._lives;
                this.livesLable.text = "Lives: " + this._lives;
                console.log("lives noted from Scoreboard.ts");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scoreboard.prototype, "Score", {
            get: function () {
                return this._score;
            },
            set: function (v) {
                this._score = v;
                config.Game.SCORE = this._score;
                this.scoreLable.text = "Score: " + this._score;
                console.log("score noted from Scoreboard.ts");
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scoreboard.prototype, "HighScore", {
            get: function () {
                return this._highScore;
            },
            set: function (v) {
                this._highScore = v;
                config.Game.HIGH_SCORE = this._highScore;
                this.highScoreLabel.setText("high score: " + this._highScore);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scoreboard.prototype, "highScoreLabel", {
            get: function () {
                return this._highScoreLabel;
            },
            set: function (v) {
                this._highScoreLabel = v;
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
            this._highScoreLabel = new objects.Label("high score: 9999", "20px", "Consolas", "#FFFF00", 320, 290);
            this.Lives = config.Game.LIVES;
            this.Score = config.Game.SCORE;
            this.HighScore = config.Game.HIGH_SCORE;
        };
        return Scoreboard;
    }());
    managers.Scoreboard = Scoreboard;
})(managers || (managers = {}));
//# sourceMappingURL=Scoreboard.js.map