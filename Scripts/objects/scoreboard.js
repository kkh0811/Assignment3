var objects;
(function (objects) {
    // Scene Class
    var ScoreBoard = (function () {
        // CONSTRUCTOR +++++++++++++++++++++++++++++
        function ScoreBoard() {
            this._score = 0;
            this._lives = 5;
            this._livesLabel = new createjs.Text("Lives:", "40px Consolas", "#FFFF00");
            this._scoreLabel = new createjs.Text("Score:", "40px Consolas", "#FFFF00");
            this._scoreLabel.x = 350;
            stage.addChild(this._livesLabel);
            stage.addChild(this._scoreLabel);
        }
        // PUBLIC MEHTODS
        ScoreBoard.prototype.update = function () {
            this._livesLabel.text = "Lives: " + this._lives;
            this._scoreLabel.text = "Score: " + this._score;
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map