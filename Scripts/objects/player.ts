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
            super(assets.getResult("master"));

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
        private _shuffleImages(value:string)
        {
            var images = new Array();
            images[0] = assets.getResult("master1");
            images[1] = assets.getResult("master2");
            images[2] = assets.getResult("master3");
            images[3] = assets.getResult("masterDead")
        }
        
        
        // PUBLIC MEHTODS
        public update(): void {
            this.y = stage.mouseY;
            this._checkBounds();
        }
    }
}