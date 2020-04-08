let Game = (function(){
    let canvas:HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    let stage:createjs.Stage;
    let heyLable: objects.Lable;
    function Start():void
    {
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update():void
    {
        stage.update();
    }
    function Main():void
    {
        console.log("hey!");
        heyLable = new objects.Lable("hey", "20px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(heyLable);   
    }
    window.addEventListener("load", Start)

}());