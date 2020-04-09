"use strict";
let Game = (function () {
    let canvas = document.getElementsByTagName("canvas")[0];
    let stage;
    let heyLable;
    let testButton;
    let pla;
    function Start() {
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        pla.Update();
        stage.update();
    }
    function Main() {
        heyLable = new objects.Lable("hey", "20px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(heyLable);
        testButton = new objects.Button();
        stage.addChild(testButton);
        pla = new objects.Player();
        stage.addChild(pla);
    }
    window.addEventListener("load", Start);
}());
//# sourceMappingURL=game.js.map