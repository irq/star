/// <reference path="../../typings/phaser.comments.d.ts" />

namespace Star {
    export class GameBoard extends Phaser.State {
        private music: Phaser.Sound;
        private player: Player;

        public create(): void {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.music = this.add.audio('music', 1, false);
            this.music.play();
            this.player = new Player(this.game, this.world.width / 2, this.world.height - 50);
            this.game.stage.backgroundColor = 0xffffff;
        }
    }
}
