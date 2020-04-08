module objects
{
    export class Lable extends createjs.Text
    {
        constructor(
            public lableString:string = "empty lable",
            public fontSize: string = "12px",
            public fontFamily: string = "Consolas",
            public fontColour: string = "#000000",
            public x: number, public y: number, public isCentered:boolean)
            {
                super(lableString, fontSize + " " +fontFamily, fontColour);
                if(isCentered)
                {
                    this.regX = this.getBounds().width * 0.5;
                    this.regY = this.getMeasuredLineHeight() * 0.5;
                }

                this.x = x;
                this.y = y;
            
            }
    }
}