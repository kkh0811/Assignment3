var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // Forest Class +++++++++++++++++++++++
    var Forest = (function (_super) {
        __extends(Forest, _super);
        // COSTRUCTOR METHODS +++++++++++++++++++++
        function Forest() {
            _super.call(this, assets.getResult("forest"));
            this._speed = 2; //Forest SPEED
            this._reset();
            this._width = this.getBounds().width;
            this._height = this.getBounds().height;
        }
        // PRIVATE METHODS +++++++++++++++++++++++
        Forest.prototype._checkBounds = function () {
            console.log(this.x);
            if (this.x <= -290) {
                this._reset();
            }
        };
        // reset the forest offscreen
        Forest.prototype._reset = function () {
            this.x = 0;
            this.y = 0;
        };
        Forest.prototype.update = function () {
            // scroll the forest 5 px per frame
            this.x -= this._speed;
            this._checkBounds();
        };
        return Forest;
    })(createjs.Bitmap);
    objects.Forest = Forest;
})(objects || (objects = {}));
//# sourceMappingURL=forest.js.map