"use strict";
var objects;
(function (objects) {
    class Lable extends createjs.Text {
        constructor(lableString = "empty lable", fontSize = "12px", fontFamily = "Consolas", fontColour = "#000000", x, y, isCentered) {
            super(lableString, fontSize + " " + fontFamily, fontColour);
            this.lableString = lableString;
            this.fontSize = fontSize;
            this.fontFamily = fontFamily;
            this.fontColour = fontColour;
            this.x = x;
            this.y = y;
            this.isCentered = isCentered;
            if (isCentered) {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getMeasuredLineHeight() * 0.5;
            }
            this.x = x;
            this.y = y;
        }
    }
    objects.Lable = Lable;
})(objects || (objects = {}));
//# sourceMappingURL=lable.js.map