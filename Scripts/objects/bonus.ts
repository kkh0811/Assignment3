module objects {
    // Bonus Class +++++++++++++++++++++++
    export class Bonus extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++

        // COSTRUCTOR METHODS +++++++++++++++++++++
        constructor() {
            super("bonus");
            this._reset(this._rightBounds);
        }
        
        // PRIVATE METHODS +++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // has outside the viewport
            if(this.x <= value)
            {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the Bonus offscreen
        protected _reset(value:number):void {
            this._speed.x = Math.floor(Math.random()*5) +2;
            this._speed.y = Math.floor(Math.random()*4) -2;
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds + this._topBounds);
        }
        
        public update():void {
            // scroll the Bonus left the screen
            this.x -= this._speed.x;
            this.y -+ this._speed.y;
            this._checkBounds((-config.Screen.WIDTH)*2);
        }
    }
}