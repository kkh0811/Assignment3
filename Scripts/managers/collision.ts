module managers {
    // COLLISION MANAGER CLASS
    export class Collision {
        //PRIVATE INSTANCE VARIABLES
        private _player:objects.Player;
        constructor(player:objects.Player ){
            this._player = player;
        }
        
        public distance(startPoint:createjs.Point, endPoint:createjs.Point):number {
            return Math.sqrt(Math.pow((endPoint.x - startPoint.x),2) + Math.pow(endPoint.y - startPoint.y,2))
        }
        
        public check(object:objects.GameObject){
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var playerHalfWidth:number = this._player.width * 0.5;
            var objectHalfWidth:number = object.width * 0.5;
            var minimumDistance:number = playerHalfWidth + objectHalfWidth;
            
            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            
            
            if(this.distance(startPoint, endPoint) < minimumDistance)
            {
                
                if(object.name === "enemy"){
                    console.log("enemy hit!");
                    play._lives --;
                    object._reset(0);
                    
                }
                if(object.name ==="bonus"){
                    console.log("bonus hit!");   
                    play._lives ++;
                    object._reset(0);
                }


            }
        }
    }
}