/// <reference path="../../typings/phaser.comments.d.ts" />

namespace Star {
    export class Player extends Phaser.Sprite {
        private starHandler: StarHandler;

        constructor(game: Phaser.Game, starHandler: StarHandler, x: number, y: number) {
            super(game, x, y, 'pew');
            this.anchor.setTo(0.5, 0);
            this.starHandler = starHandler;
            game.add.existing(this);
        }

        public update(): void {
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                this.starHandler.fire(this, new Phaser.Point(20, 20));
            }
        }
    }
}
