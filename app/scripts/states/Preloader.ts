/// <reference path="../../typings/phaser.comments.d.ts" />

namespace Star {
    export class Preloader extends Phaser.State {
        private preloadBar: Phaser.Sprite;

        public preload(): void {
            //  Set-up our preloader sprite
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);

            //  Load our actual games assets
            this.load.image('titlepage', 'assets/images/titlepage.jpg');
            this.load.image('logo', 'assets/images/logo.png');
            this.load.audio('music', 'assets/sounds/title.mp3', true);
            this.load.image('pew', 'assets/images/pew.png');
            this.load.image('star', 'assets/images/star.png');
        }

        public create(): void {
            let tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        }

        public startMainMenu(): void {
            //this.game.state.start('MainMenu', true, false);
            this.game.state.start('GameBoard', true, false);
        }
    }
}
