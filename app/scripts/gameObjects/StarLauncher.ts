/// <reference path="../../typings/phaser.comments.d.ts" />

namespace Star {
    export class StarLauncher extends Phaser.Sprite {
        private fireAngleCorrection: number = -90;
        private fireSourceOffset: number = 55;

        private starHandler: StarHandler;

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, 'pew');

            this.anchor.setTo(0.5, 1);
            this.starHandler = new StarHandler(this.game);

            game.add.existing(this);
        }

        public update(): void {
            if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                this.fire();
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && this.angle > -90) {
                this.angle -= 2;
            }

            if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && this.angle < 90) {
                this.angle += 2;
            }
        }

        private fire(): void {
            let fireSource = new Phaser.Point(this.x, this.y);
            fireSource.rotate(this.x, this.y, this.angle + this.fireAngleCorrection, true, this.fireSourceOffset);
            this.starHandler.fire(fireSource.x, fireSource.y, this.angle + this.fireAngleCorrection);
        }
    }
}
