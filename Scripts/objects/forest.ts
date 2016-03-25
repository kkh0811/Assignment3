module objects {
    // Forest Class +++++++++++++++++++++++
    export class Forest extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++
        private _speed:number;
        private _width:number;
        private _height:number;
        
        // COSTRUCTOR METHODS +++++++++++++++++++++
        constructor() {
            super(assets.getResult("forest"));
            this._speed = 2; //Forest SPEED
            this._reset();
            this._width = this.getBounds().width;
            this._height = this.getBounds().height;
        }
        
        // PRIVATE METHODS +++++++++++++++++++++++
        private _checkBounds():void {
            console.log(this.x);
            if(this.x <= -290)
            {
                this._reset();
            }
        }
        
        // reset the forest offscreen
        private _reset():void {
            this.x = 0;
            this.y = 0;
        }
        
        public update():void {
            // scroll the forest 5 px per frame
            this.x -= this._speed;
            this._checkBounds();
        }
    }
}