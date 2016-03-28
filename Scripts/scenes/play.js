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
            this._score = 0;
            this._lives = 5;
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
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // added bonus to the scene
            this._bonus = new objects.Bonus();
            this.addChild(this._bonus);
            this._livesLabel = new objects.Label("Lives:", "40px Candara Bold Italic", "#FF0000", 20, 0, false);
            this.addChild(this._livesLabel);
            this._scoreLabel = new objects.Label("Score:", "40px Candara Bold Italic", "#FF0000", 425, 0, false);
            this.addChild(this._scoreLabel);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            this._forest.update();
            this._bonus.update();
            this._player.update();
            this._enemies.forEach(function (enemy) {
                enemy.update();
                _this._collision.check(enemy);
                _this._score += 0.1;
            });
            this._collision.check(this._bonus);
            this._livesLabel.text = "Lives: " + this._lives;
            this._scoreLabel.text = "Score: " + Math.round(this._score);
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map