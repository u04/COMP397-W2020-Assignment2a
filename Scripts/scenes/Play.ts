module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _ocean?: objects.Ocean;
        private _bug?: objects.Bug;
        private _food?: objects.Food;

        private _tireNumber:number;
        private _tires?: objects.Tire[];

        
       

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

            this._tireNumber = config.Game.TIRE_NUM;
            this._tires = new Array<objects.Tire>();
            
            // create an array of tire objects
        
            for (let index = 0; index < this._tireNumber; index++) 
            {
                this._tires[index] = new objects.Tire();             
            }
            
             this.Main();
        }        
        
        public Update(): void 
        {
           this._ocean.Update();

           this._food.Update();

           this._bug.Update();
           managers.Collision.AABBCheck(this._bug, this._food);

           this._tires.forEach(tire => {
            tire.Update();
            managers.Collision.AABBCheck(this._bug, tire);
        });



        }
        
        public Main(): void 
        {
            this.addChild(this._ocean);

            this.addChild(this._food);

            this.addChild(this._bug);

            this._tires.forEach(tire => {
                this.addChild(tire);
            });

 
           
        }

        
    }
}