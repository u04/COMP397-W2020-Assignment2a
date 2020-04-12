module config
{
    export class Game
    {
        public static SCREEN_WIDTH:number = 640;
        public static SCREEN_HEIGHT:number = 480;
        public static SCENE: scenes.State;
        public static ASSETS: createjs.LoadQueue;
        public static FPS: number = 60; // 60 Frames per second
        public static TIRE_NUM: number = 2;
        public static LIVES: number = 2;
        public static SCORE: number = 0;
        public static HIGH_SCORE: number = 0;
        public static SCORE_BOARD : managers.Scoreboard;
    }
}