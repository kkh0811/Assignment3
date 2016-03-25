module objects {
    // GameObject Super Class +++++++++++++++++++++++
    export class GameObject extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++
        protected _speed:createjs.Point;

        
        // COSTRUCTOR METHODS +++++++++++++++++++++
        constructor(bitmapString:string) {
            super(assets.getResult(bitmapString));
            this._speed = new createjs.Point(0,0);
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