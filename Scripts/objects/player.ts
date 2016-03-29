/*
#######################################################################################
The name of source file : player.ts
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
    // PLAYER CLASS ++++++++++++
    export class Player extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLE
        private _topBounds: number;
        private _bottomBounds: number;
        
        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;
        constructor() {
            super(assets.getResult("master1"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - this.height * 0.5;
            this.x = this.regX;
        }
        
        //PRIVATE METHODS
        private _checkBounds(): void {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }
            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        }
        
        /*
        private _shuffleImages(value:string)
        {
            var images = new Array();
            images[0] = assets.getResult("master1");
            images[1] = assets.getResult("master2");
            images[2] = assets.getResult("master2");
           do
            {
                var i:number;
                for(i = 0; i <2; i++)
                {
                    this.image = images[i];
                }
            }
            while(value != "");

        }
        */
        
        
        // PUBLIC MEHTODS
        public update(): void {
            this.y = stage.mouseY;
            this._checkBounds();
            //console.log("Shuffle!")
            //this._shuffleImages("");
            
        }
    }
}