module objects {
    // Forest Class +++++++++++++++++++++++
    export class Forest extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES ++++++++++++++++

        // COSTRUCTOR METHODS +++++++++++++++++++++
        constructor() {
            super("forest");
            this._speed.x = 1.5; //Forest SPEED
            this._reset(0);
            this.name = "forest";
        }
        
        // PRIVATE METHODS +++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            //console.log(this.x);
            if(this.x <= value)
            {
                this._reset(0);
            }
        }
        
        // reset the forest offscreen
        protected _reset(value:number):void {
            this.x = value;
        }
        
        public update():void {
            // scroll the forest 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(-300);
        }
    }
}