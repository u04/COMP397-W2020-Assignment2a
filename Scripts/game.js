"use strict";
let Game = (function () {
    let canvas = document.getElementsByTagName("canvas")[0];
    let stage;
    let heyLable;
    function Start() {
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        console.log("hey!");
        heyLable = new createjs.Text("hey", "20px Consolas", "#000000");
        stage.addChild(heyLable);
        heyLable.x = 320;
        heyLable.y = 240;
        stage.addChild(heyLable);
    }
    window.addEventListener("load", Start);
}());
//# sourceMappingURL=game.js.map