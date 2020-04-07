(function () {
    let canvas = document.getElementById("canvas");
    let stage;
    function Start() {
        console.log("chsai");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        console.log("go to main");
    }
    window.addEventListener("load", Start);
}());
//# sourceMappingURL=game.js.map