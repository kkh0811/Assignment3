/*
#######################################################################################
The name of source file : asset.ts
The information of author :  Giho Kim #300738697
Last Modified by: Giho Kim
Last Modified date: 29 March 2016
Program Description: The game is to avoid the enemies using the side scroller. User can
control the player by a mouse and the enemies will be generated randomly. Some hearts
also will be generated as bonus. when user get a bonus, which will give a life.
Good Luck!
Revision History: 1.0
#######################################################################################
*/
module objects {
    // ASSET CLASS ++++++++++++++++++++++++++
    export class Asset {
        //PUBLIC INSTANCE VARIABLES
        public id:string;
        public src: string;
        // CONSTRUCTOR +++++++++++++++++++++
        constructor(id:string, src:string) {
            this.id = id;
            this.src = src;
        }
    }
}