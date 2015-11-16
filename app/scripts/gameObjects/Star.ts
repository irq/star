/// <reference path="../../typings/phaser.comments.d.ts" />

module Star {
    export class Star extends Phaser.Sprite {
        constructor(game: Phaser.Game) {
            super(game, 0, 0, 'star');
            
            this.anchor.set(0.5);
            this.checkWorldBounds = true;
            this.outOfBoundsKill = true;
            this.exists = false;
            this.game.physics.enable(this);
            
            game.add.existing(this);
        }
 
        fire(source:Phaser.Point, target:Phaser.Point) {
            this.reset(source.x, source.y);
            this.game.physics.arcade.accelerateToXY(this, target.x, target.y);
        }
    }
}
