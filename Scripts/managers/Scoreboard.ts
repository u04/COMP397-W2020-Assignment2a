module managers
{
    export class Scoreboard
    {
        
        private _lives : number;
        private _score : number;
        private _livesLable : objects.Label;
        private _scoreLable : objects.Label;
        Lives: Number;
        Score: number;


        public get lives() : number {
            return this._lives;
        }
        public set lives(v : number) {
            this._lives = v;
            config.Game.LIVES = this._lives;
            this.livesLable.text = "Lives: " + this._lives;
        }
        public get score() : number {
            return this._score;
        }
        public set score(v : number) {
            this._score = v;
            config.Game.SCORE = this._score;
            this.scoreLable.text = "Score: " + this._score;
        }
        
        

        public get livesLable() : objects.Label {
            return this._livesLable;
        }
        public set livesLable(v : objects.Label) {
            this._livesLable = v;
        }
        

        public get scoreLable() : objects.Label {
            return this._scoreLable;
        }
        public set scoreLable(v : objects.Label) {
            this._scoreLable = v;
        }

        constructor()
        {
            this._initialize();
        }

        private _initialize(): void
        {
            this._livesLable = new objects.Label("Lives: 9", "20px", "Consolas", "#FFFF00", 20, 20);
            this._scoreLable = new objects.Label("Score: 9", "20px", "Consolas", "#FFFF00", 490, 20);
            this.Lives = config.Game.LIVES;
            this.Score = config.Game.SCORE;
        }
        
        
    }
}