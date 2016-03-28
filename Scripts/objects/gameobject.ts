module objects {
    // GameObject Super Class +++++++++++++++++++++++
    export class GameObject extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++
        protected _speed: createjs.Point;
        protected _leftBounds: number;
        protected _rightBounds: number;
        protected _topBounds: number;
        protected _bottomBounds: number;

        //Public Instance Variables
        public name: string;
        public width: number;
        public height: number;
        public centerX: number;
        public centerY: number;

        
        // COSTRUCTOR METHODS +++++++++++++++++++++
        constructor(bitmapString: string) {
            super(assets.getResult(bitmapString));
            this._speed = new createjs.Point(0, 0);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this._topBounds = this.height;
            this._bottomBounds = config.Screen.HEIGHT - this.height;
            this._leftBounds = -this.width;
            this._rightBounds = config.Screen.WIDTH + this.width;
        }
        
        // PRIVATE METHODS +++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            var resetValue: number = 0;
            // check if x value has met the reset criteira
            if (this.x <= value) {
                this._reset(resetValue);
            }
        }
        
        // reset the forest offscreen
        public _reset(value: number): void {
            this.x = value;
        }

        public update(): void {
            var boundValue: number = 0;
            // scroll the forest 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(boundValue);
        }
    }
}