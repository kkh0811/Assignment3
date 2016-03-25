// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _forest: objects.Forest;
        private _enemy: objects.Enemy;
        private _bonus: objects.Bonus;

        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // added forest to the scene
            this._forest = new objects.Forest();
            this.addChild(this._forest);
            
            // added enemy to the scene
            this._enemy = new objects.Enemy();
            this.addChild(this._enemy);
            
            // added bonus to the scene
            this._bonus = new objects.Bonus();
            this.addChild(this._bonus);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._forest.update();
            this._enemy.update();
            this._bonus.update();

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}