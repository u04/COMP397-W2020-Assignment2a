module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _ocean?: objects.Ocean;
        private _bug?: objects.Bug;
        private _food?: objects.Food;

        private _cloudNumber:number;
        private _clouds?: objects.Cloud[];

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
            
            this._ocean = new objects.Ocean();
            this._bug = new objects.Bug();
            this._food = new objects.Food();

            this._cloudNumber = config.Game.CLOUD_NUM;
            this._clouds = new Array<objects.Cloud>();
            
            // create an array of cloud objects
        
             this.Main();
        }        
        
        public Update(): void 
        {
           this._ocean.Update();

           this._food.Update();

           this._bug.Update();



        }
        
        public Main(): void 
        {
            this.addChild(this._ocean);

            this.addChild(this._food);

            this.addChild(this._bug);

 
           
        }

        
    }
}