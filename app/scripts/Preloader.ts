/// <reference path="../typings/phaser.comments.d.ts" />

module Star {
    export class Preloader extends Phaser.State {
        preloadBar: Phaser.Sprite;
        
        preload() {
            //  Set-up our preloader sprite
            ////this.preloadBar = this.game.add.sprite(200, 250, 'preloadBar');
            this.preloadBar = this.add.sprite(200, 250, 'preloadBar');
            this.load.setPreloadSprite(this.preloadBar);
 
            //  Load our actual games assets
            this.load.image('titlepage', 'assets/images/titlepage.jpg');
            this.load.image('logo', 'assets/images/logo.png');
            this.load.audio('music', 'assets/sounds/title.mp3', true);
            this.load.spritesheet('simon', 'assets/images/simon.png', 58, 96, 5);
            this.load.image('level1', 'assets/images/level1.png');
        }
 
        create() {
            var tween = this.add.tween(this.preloadBar).to({ alpha: 0 }, 1000,Phaser.Easing.Linear.None, true);
            tween.onComplete.add(this.startMainMenu, this);
        }
 
        startMainMenu() {
            this.game.state.start('MainMenu', true, false);
        }
    }
}
