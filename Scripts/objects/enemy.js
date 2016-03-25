var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // Forest Class +++++++++++++++++++++++
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++
        // COSTRUCTOR METHODS +++++++++++++++++++++
        function Enemy() {
            _super.call(this, "enemy");
            this._speed.x = 2.5; //Forest SPEED
            this._reset(this._rightBounds);
        }
        // PRIVATE METHODS +++++++++++++++++++++++
        Enemy.prototype._checkBounds = function (value) {
            // has outside the viewport
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the forest offscreen
        Enemy.prototype._reset = function (value) {
            this._speed.x = Math.floor((Math.random() * 5) + 5);
            this._speed.y = Math.floor((Math.random() * 5) - 5);
            this.x = value;
            this.y = Math.floor((Math.random() * this._bottomBounds) + this._topBounds);
        };
        Enemy.prototype.update = function () {
            // scroll the forest 5 px per frame
            this.x -= this._speed.x;
            this.y -= this._speed.y;
            this._checkBounds(-this._leftBounds);
        };
        return Enemy;
    })(objects.GameObject);
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map