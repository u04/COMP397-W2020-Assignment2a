let Game = (function(){
    let canvas:HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    let stage:createjs.Stage;
    let heyLable: objects.Lable;
    let testButton: objects.Button;
    let pla: objects.Player;

    function Start():void
    {
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update():void
    {
        pla.Update();
        stage.update();
    }
    function Main():void
    {
        
        heyLable = new objects.Lable("hey", "20px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(heyLable);

        testButton = new objects.Button();
        stage.addChild(testButton);

        pla = new objects.Player();
        stage.addChild(pla);
    }
    window.addEventListener("load", Start)

}());