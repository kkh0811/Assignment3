var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // Bonus Class +++++++++++++++++++++++
    var Bonus = (function (_super) {
        __extends(Bonus, _super);
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++
        // COSTRUCTOR METHODS +++++++++++++++++++++
        function Bonus() {
            _super.call(this, "bonus");
            this._reset(this._rightBounds);
            this.name = "bonus";
        }
        // PRIVATE METHODS +++++++++++++++++++++++
        Bonus.prototype._checkBounds = function (value) {
            // has outside the viewport
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        // reset the Bonus offscreen
        Bonus.prototype._reset = function (value) {
            this._speed.x = Math.floor(Math.random() * 5) + 2;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds + this._topBounds);
        };
        Bonus.prototype.update = function () {
            // scroll the Bonus left the screen
            this.x -= this._speed.x;
            this.y -= this._speed.y;
            this._checkBounds((-config.Screen.WIDTH) * 2);
        };
        return Bonus;
    })(objects.GameObject);
    objects.Bonus = Bonus;
})(objects || (objects = {}));
//# sourceMappingURL=bonus.js.map