module objects
{
    export class Tire extends GameObject
    {
        // PRIVATE INSTANCE MEMBERS
        private _verticalSpeed?:number;
        private _horizontalSpeed?:number;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super(config.Game.ASSETS.getResult("tire"), new Vector2(), true);

            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void 
        {
            if(this.position.y > config.Game.SCREEN_HEIGHT + this.height)
            {
                this.Reset();
            }
        }  

        private _move(): void
        {
            this.position = Vector2.add(this.position, this.velocity);
        }

        // PUBLIC METHODS
        public Start(): void 
        {
            this.type = enums.GameObjectType.TIRE;
            this.alpha = 0.5; // transparency set to 50%
            this._verticalSpeed = 5;
            this.velocity = new Vector2(0, this._verticalSpeed);
            this.Reset();
        }

        public Update(): void 
        {
            this._move();
            this._checkBounds();
        }
        
        public Reset(): void 
        {
            //this._verticalSpeed = util.Mathf.RandomRange(5, 10); // speed ranges from 5 to 10 px per frame
            this._verticalSpeed = 5;
            //this._horizontalSpeed = util.Mathf.RandomRange(-2, 2); // random horizontal drift
            this._horizontalSpeed = 4;
            this.velocity = new Vector2(this._horizontalSpeed, this._verticalSpeed);
            let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            let randomY = util.Mathf.RandomRange(-this.height * 2, -this.height);
            this.position = new Vector2(randomX, randomY, this);
        }
    }
}