/*
#######################################################################################
The name of source file : menu.ts
The information of author :  Giho Kim #300738697
Last Modified by: Giho Kim
Last Modified date: 29 March 2016
Program Description: The game is to avoid the enemies using the side scroller. User can
control the player by a mouse and the enemies will be generated randomly. Some hearts
also will be generated as bonus. when user get a bonus, which will give a life.
Good Luck!
Revision History: 1.0
#######################################################################################
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            //Add background
            this._backgroundImage = new createjs.Bitmap(assets.getResult("MainBackground"));
            this.addChild(this._backgroundImage);
            //Add Menu Label
            this._menuLabel = new objects.Label("Are you ready?", "60px Candara Bold Italic", "#FFFFFF", config.Screen.CENTER_X, config.Screen.CENTER_Y - 210, true);
            this.addChild(this._menuLabel);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X - 10, config.Screen.CENTER_Y + 175, true);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // StartButton click event handler
        Menu.prototype._startButtonClick = function (event) {
            // Switch to the INTRO Scene
            // Add click sound
            createjs.Sound.play("bgmchicken");
            scene = config.Scene.INTRO;
            changeScene();
        };
        return Menu;
    })(objects.Scene);
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map