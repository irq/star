/// <reference path="../typings/phaser.comments.d.ts" />

module Star {
    export class Game extends Phaser.Game {
        constructor() {
            super(800, 600, Phaser.AUTO, 'content');
 
            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('GameBoard', GameBoard, false);
 
            this.state.start('Boot');
        }
    }
}
