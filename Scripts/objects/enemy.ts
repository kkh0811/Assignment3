module objects {
    // Forest Class +++++++++++++++++++++++
    export class Enemy extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++

        // COSTRUCTOR METHODS +++++++++++++++++++++
        constructor() {
            super("enemy");
            this._speed.x = 2.5; //Forest SPEED
            this._reset(this._rightBounds);
            this.name = "enemy";
        }
        
        // PRIVATE METHODS +++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // has outside the viewport
            if(this.x <= value)
            {
                this._reset(this._rightBounds);
            }
        }
        
        // reset the forest offscreen
        protected _reset(value:number):void {
            this._speed.x = Math.round((Math.random()*5) +3);
            this._speed.y = Math.round((Math.random()*4) -1);
            this.x = value;
            this.y = Math.floor((Math.random() * this._bottomBounds) + this._topBounds); 
        }
        
        public update():void {
            // scroll the forest 5 px per frame
            this.x -= this._speed.x;
            this.y -= this._speed.y;
            this._checkBounds((-config.Screen.WIDTH)*2);
        }
    }
}