module scenes
{
    export class Ins extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _ocean?: objects.Ocean;
        private _insLabel: objects.Label;
        private _backButton: objects.Button;

        
       

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {
            this._insLabel = new objects.Label("move mouse left or right to move ant left or right, avoid tires, try to eat food", "12px", "Consolas", "#FFFF00", 320, 180, true);
            this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 230, true);
            this._ocean = new objects.Ocean();
      
            
 
            
             this.Main();
        }        
        
        public Update(): void 
        {
           this._ocean.Update();
           

          



        }
        
        public Main(): void 
        {
            this.addChild(this._ocean);
            this.addChild(this._insLabel);
            this.addChild(this._backButton);
            this._backButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.START;
            });

            

 
           
        }

        
    }
}