module objects {
    // GameObject Super Class +++++++++++++++++++++++
    export class GameObject extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++
        protected _speed:createjs.Point;
        protected _widhth:number;
        protected _height:number;
        protected _leftBounds:number;
        protected _rightBounds:number;
        protected _topBounds:number;
        protected _bottomBounds:number;

        
        // COSTRUCTOR METHODS +++++++++++++++++++++
        constructor(bitmapString:string) {
            super(assets.getResult(bitmapString));
            this._speed = new createjs.Point(0,0);
            this._widhth = this.getBounds().width;
            this._height = this.getBounds().height;
            this._topBounds = this._height;
            this._bottomBounds = config.Screen.HEIGHT - this._height;
            this._leftBounds = -this._widhth;
            this._rightBounds = config.Screen.WIDTH + this._widhth;
        }
        
        // PRIVATE METHODS +++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            var resetValue:number = 0;
            // check if x value has met the reset criteira
            if(this.x <= value)
            {
                this._reset(resetValue);
            }
        }
        
        // reset the forest offscreen
        protected _reset(value:number):void {
            this.x = value;
        }
        
        public update():void {
            var boundValue:number = 0;
            // scroll the forest 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(boundValue);
        }
    }
}