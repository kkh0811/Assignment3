// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _forest: objects.Forest;
        private _enemies: objects.Enemy[];
        private _bonus: objects.Bonus;
        private _enemyCount:number;
        private _player: objects.Player;
        private _collision: managers.Collision;

        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            //Set Enemy Count
            this._enemyCount = 3;
            
            //Instantiate Enemy array 
            this._enemies = new Array<objects.Enemy>();
                
            // added forest to the scene
            this._forest = new objects.Forest();
            this.addChild(this._forest);
            
            // added player to the secne
            this._player = new objects.Player();
            this.addChild(this._player);
            
            // added enemies to the scene
            for (var enemy: number = 0; enemy < this._enemyCount; enemy++) {
                this._enemies[enemy] = new objects.Enemy();
                this.addChild(this._enemies[enemy]);
            }
            
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            
            // added bonus to the scene
            this._bonus = new objects.Bonus();
            this.addChild(this._bonus);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._forest.update();
            this._bonus.update();
            this._player.update();
            
            this._enemies.forEach(enemy => {
                enemy.update();
                this._collision.check(enemy);
            });
            
            this._collision.check(this._bonus);
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}