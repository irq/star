/// <reference path="../../typings/phaser.comments.d.ts" />

module Star {
    export class GameBoard extends Phaser.State {
        private music: Phaser.Sound;
        private player: Player;
        private starHandler: StarHandler;
 
        create() {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.music = this.add.audio('music', 1, false);
            this.music.play();
            this.starHandler = new StarHandler(this.game);
            this.starHandler.create();
            this.player = new Player(this.game, this.starHandler, 500, 500);
            this.game.stage.backgroundColor = 0xffffff;
        }
    }
}
