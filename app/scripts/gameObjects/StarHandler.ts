/// <reference path="../../typings/phaser.comments.d.ts" />

namespace Star {
    export class StarHandler extends Phaser.Group {
        private nextFire: number = 0;
        private fireRate: number = 200;

        constructor(game: Phaser.Game) {
            super(game);
        }

        public create(): void {
            this.addStars(10);
        }

        public fire(source: Player, target: Phaser.Point): void {
            if (this.game.time.time < this.nextFire) {
                return;
            }

            let star = <Star>this.getFirstExists(false);
            if (star === null) {
                this.addStars(5);
                star = <Star>this.getFirstExists(false);
            }

            star.fire(source.position, target);

            this.nextFire = this.game.time.time + this.fireRate;
        }

        private addStars(count: number): void {
            for (let i = 0; i < count; i++) {
                this.add(new Star(this.game), true);
            }
        }
    }
}
