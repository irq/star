/// <reference path="../../typings/phaser.comments.d.ts" />

module Star {
    export class StarHandler extends Phaser.Group {
        private nextFire:number = 0;
        private fireRate:number = 200;
        
        constructor(game: Phaser.Game) {
            super(game);
        }
        
        create() {
            this.addStars(10);
        }
        
        fire(source:Player, target:Phaser.Point) {
            if (this.game.time.time < this.nextFire) {
                return;
            }
            
            var star = <Star>this.getFirstExists(false);
            if (star === null) {
                this.addStars(5);
                star = <Star>this.getFirstExists(false);
            }
            
            star.fire(source.position, target);
            
            this.nextFire = this.game.time.time + this.fireRate;
        }
        
        private addStars(count:number) {
            for (var i = 0; i < count; i++)
            {
                this.add(new Star(this.game), true);
            }
        }
    }
}
