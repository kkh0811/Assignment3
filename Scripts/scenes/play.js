var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            //Set Enemy Count
            this._enemyCount = 3;
            //Instantiate Enemy array 
            this._enemies = new Array();
            // added forest to the scene
            this._forest = new objects.Forest();
            this.addChild(this._forest);
            // added player to the secne
            this._player = new objects.Player();
            this.addChild(this._player);
            // added enemies to the scene
            for (var enemy = 0; enemy < this._enemyCount; enemy++) {
                this._enemies[enemy] = new objects.Enemy();
                this.addChild(this._enemies[enemy]);
            }
            // added bonus to the scene
            this._bonus = new objects.Bonus();
            this.addChild(this._bonus);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            this._forest.update();
            this._bonus.update();
            this._player.update();
            for (var enemy in this._enemies) {
                this._enemies[enemy].update();
            }
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map