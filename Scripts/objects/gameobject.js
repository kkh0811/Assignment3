var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // GameObject Super Class +++++++++++++++++++++++
    var GameObject = (function (_super) {
        __extends(GameObject, _super);
        // COSTRUCTOR METHODS +++++++++++++++++++++
        function GameObject(bitmapString) {
            _super.call(this, assets.getResult(bitmapString));
            this._speed = new createjs.Point(0, 0);
        }
        // PRIVATE METHODS +++++++++++++++++++++++
        GameObject.prototype._checkBounds = function (value) {
            var resetValue = 0;
            // check if x value has met the reset criteira
            if (this.x <= value) {
                this._reset(resetValue);
            }
        };
        // reset the forest offscreen
        GameObject.prototype._reset = function (value) {
            this.x = value;
        };
        GameObject.prototype.update = function () {
            var boundValue = 0;
            // scroll the forest 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(boundValue);
        };
        return GameObject;
    })(createjs.Bitmap);
    objects.GameObject = GameObject;
})(objects || (objects = {}));
//# sourceMappingURL=gameobject.js.map