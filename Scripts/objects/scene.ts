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