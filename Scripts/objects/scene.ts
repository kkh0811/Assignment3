/*
#######################################################################################
The name of source file : scene.ts
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

module objects {
    // Scene Class
    export class Scene extends createjs.Container {
        private _background;
        // CONSTRUCTOR +++++++++++++++++++++++++++++
        constructor() {
            super();
            this.start();
        }
       // Add background 
        public background(value:string)
        {
            this._background = new createjs.Bitmap(assets.getResult("MainBackground"));
            this.addChild(this._background);
        }
        
        // Add game objects to my scene in this method
        public start():void {
            stage.addChild(this);
        }
        
        // update game objects in my scene
        public update():void {
            
        }
    }
}