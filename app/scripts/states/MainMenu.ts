/// <reference path="../../typings/phaser.comments.d.ts" />

namespace Star {
    export class MainMenu extends Phaser.State {
        private background: Phaser.Sprite;
        private logo: Phaser.Sprite;

        public create(): void {
            this.background = this.add.sprite(0, 0, 'titlepage');
            this.background.alpha = 0;

            this.logo = this.add.sprite(this.world.centerX, -300, 'logo');
            this.logo.anchor.setTo(0.5, 0.5);

            this.add.tween(this.background).to({ alpha: 1}, 2000, Phaser.Easing.Bounce.InOut, true);
            this.add.tween(this.logo).to({ y: 220 }, 2000, Phaser.Easing.Elastic.Out, true, 2000);

            this.input.onDown.addOnce(this.fadeOut, this);
        }

        public fadeOut(): void {
            this.add.tween(this.background).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
            let tween = this.add.tween(this.logo).to({ y: 800 }, 2000, Phaser.Easing.Linear.None, true);

            tween.onComplete.add(this.startGame, this);
        }

        public startGame(): void {
            this.game.state.start('GameBoard', true, false);
        }
    }
}
