/// <reference path="../../typings/phaser.comments.d.ts" />

namespace Star {
    export class GameBoard extends Phaser.State {
        private music: Phaser.Sound;
        private player: Player;

        public create(): void {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.music = this.add.audio('music', 1, false);
            this.music.play();
            this.player = new Player(this.game, 500, 500);
            this.game.stage.backgroundColor = 0xffffff;
        }
    }
}
