/// <reference path="../../typings/phaser.comments.d.ts" />

namespace Star {
    export class Star extends Phaser.Sprite {
        constructor(game: Phaser.Game) {
            super(game, 0, 0, 'star');

            this.anchor.set(0.5);
            this.checkWorldBounds = true;
            this.outOfBoundsKill = true;
            this.exists = false;
            this.game.physics.enable(this);
        }

        public fire(sourceX: number, sourceY: number, angle: number): void {
            this.reset(sourceX, sourceY);
            this.game.physics.arcade.velocityFromAngle(angle, 300, this.body.velocity);
        }
    }
}
