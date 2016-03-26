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
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++
        // COSTRUCTOR METHODS +++++++++++++++++++++
        function Forest() {
            _super.call(this, "forest");
            this._speed.x = 1.5; //Forest SPEED
            this._reset(0);
            this.name = "forest";
        }
        // PRIVATE METHODS +++++++++++++++++++++++
        Forest.prototype._checkBounds = function (value) {
            //console.log(this.x);
            if (this.x <= value) {
                this._reset(0);
            }
        };
        // reset the forest offscreen
        Forest.prototype._reset = function (value) {
            this.x = value;
        };
        Forest.prototype.update = function () {
            // scroll the forest 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(-300);
        };
        return Forest;
    })(objects.GameObject);
    objects.Forest = Forest;
})(objects || (objects = {}));
//# sourceMappingURL=forest.js.map