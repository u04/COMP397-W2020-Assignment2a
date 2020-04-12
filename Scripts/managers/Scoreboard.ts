module managers
{
    export class Scoreboard
    {
        
        private _lives : number;
        private _score : number;
        private _livesLable : objects.Label;
        private _scoreLable : objects.Label;


        public get Lives() : number 
        {
            return this._lives;
        }

        public set Lives(v : number) 
        {
            this._lives = v;
            config.Game.LIVES = this._lives;
            this.livesLable.text = "Lives: " + this._lives;
            console.log("lives noted from Scoreboard.ts")
        }

        public get Score() : number 
        {
            return this._score;
        }
       
        public set Score(v : number)
         {
            this._score = v;
            config.Game.SCORE = this._score;
            this.scoreLable.text = "Score: " + this._score;
            console.log("score noted from Scoreboard.ts")
        }
        

        private _highScore : number;
        public get HighScore() : number 
        {
            return this._highScore;
        }
        
        public set HighScore(v : number) 
        {
            this._highScore = v;
            config.Game.HIGH_SCORE = this._highScore;
            this.highScoreLabel.setText("high score: " + this._highScore);
        }
        
        private _highScoreLabel : objects.Label;
        
        public get highScoreLabel() : objects.Label 
        {
            return this._highScoreLabel;
        }
        
        public set highScoreLabel(v : objects.Label) 
        {
            this._highScoreLabel = v;
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
            this._highScoreLabel = new objects.Label("high score: 9999", "20px", "Consolas", "#FFFF00", 320, 290);
            this.Lives = config.Game.LIVES;
            this.Score = config.Game.SCORE;
            this.HighScore = config.Game.HIGH_SCORE;
        }
        
        
    }
}