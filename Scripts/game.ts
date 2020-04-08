let Game = (function(){
    let canvas:HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    let stage:createjs.Stage;
    let heyLable: createjs.Text;
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
        heyLable = new createjs.Text("hey", "20px Consolas", "#000000");
        stage.addChild(heyLable);
        heyLable.x = 320;
        heyLable.y = 240;
        stage.addChild(heyLable);   
    }
    window.addEventListener("load", Start)

}());