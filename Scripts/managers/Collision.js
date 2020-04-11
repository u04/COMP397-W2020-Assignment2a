"use strict";
var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.squaredRadiusCheck = function (object1, object2) {
            // squared radius check
            var radii = object1.halfHeight + object2.halfHeight;
            if (objects.Vector2.sqrDistance(object1.position, object2.position) < (radii * radii)) {
                if (!object2.isColliding) {
                    switch (object2.type) {
                        //     case enums.GameObjectType.TIRE:
                        //         console.log("hit tire");
                        //         break;
                        //     case enums.GameObjectType.FOOD:
                        //         console.log("hit food");
                        //         break;
                        // case enums.GameObjectType.FOOD:
                        // config.Game.SCORE_BOARD.Score += 100;
                        // break;
                        // case enums.GameObjectType.TIRE:
                        // config.Game.SCORE_BOARD.Lives -= 91;
                        // break;
                        //  }
                        // object2.isColliding = true;
                        // return true;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
            return false;
        };
        Collision.AABBCheck = function (object1, object2) {
            var object1Offset = (!object1.isCentered) ? new objects.Vector2(0, 0) : new objects.Vector2(object1.halfWidth, object1.halfHeight);
            var object2Offset = (!object2.isCentered) ? new objects.Vector2(0, 0) : new objects.Vector2(object2.halfWidth, object2.halfHeight);
            var object1TopLeft = new objects.Vector2(object1.position.x - object1Offset.x, object1.position.y - object1Offset.y);
            var object2TopLeft = new objects.Vector2(object2.position.x - object2Offset.x, object2.position.y - object2Offset.y);
            // AABB Collision Detection
            if (object1TopLeft.x < object2TopLeft.x + object2.width &&
                object1TopLeft.x + object1.width > object2TopLeft.x &&
                object1TopLeft.y < object2TopLeft.y + object2.height &&
                object1TopLeft.y + object1.height > object2TopLeft.y) {
                if (!object2.isColliding) {
                    switch (object2.type) {
                        case enums.GameObjectType.TIRE:
                            console.log("hit tire");
                            createjs.Sound.play("hurt");
                            config.Game.SCORE_BOARD.Lives = -1;
                            if (config.Game.LIVES < 1) {
                                config.Game.SCENE = scenes.State.END;
                            }
                            break;
                        case enums.GameObjectType.FOOD:
                            console.log("hit food");
                            createjs.Sound.play("eat");
                            config.Game.SCORE_BOARD.Score += 100;
                            break;
                    }
                    object2.isColliding = true;
                    return true;
                }
            }
            else {
                object2.isColliding = false;
            }
            return false;
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=Collision.js.map