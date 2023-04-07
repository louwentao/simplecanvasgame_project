import * as scg from 'canvas-2d-game'
import GameScence from './game-scence';

export default class ResourcesLoader extends scg.LoadingBar {
    private bgImg!: scg.Image;
    private barImg!: scg.Image;
    private startBtn!: scg.Image;
    init() {
        super.init();
        this.bgImg = new scg.Image({ x: 0, y: 0, height: this.height, width: this.width }, 'bgImg');
        this.addChild(this.bgImg);
        this.barImg = new scg.Image({ x: 0.5 * this.width, y: 700, height: 20, width: 0 }, 'barImg');
        this.barImg.originX = this.barImg.originY = 0.5;
        this.addChild(this.barImg);
    }
    private startGame() {
        const { height, width } = this.mainGame;
        this.mainGame.addChild(new GameScence({ x: 0, y: 0, height, width }));
        this.parent?.removeChild(this);
    }
    onLoading(now: number, all: number) {
        const maxWidth = 0.8 * this.width;
        if (now === all - 1) {
            setTimeout(() => {
                this.barImg!.width = now / all * maxWidth;
                setTimeout(() => {
                    this.removeChild(this!.barImg);
                    this.startBtn = new scg.Image({ x: 0.5 * this.width, y: 700, height: 60, width: 100 }, 'barImg');
                    this.startBtn.originX = this.startBtn.originY = 0.5;
                    this.addChild(this.startBtn);
                    this.startBtn.on(scg.Event.CLICK, this.startGame, this);
                }, 1500);
            }, 500);
        }
        else if(now !== all){
            this.barImg!.width = now / all * maxWidth;
        }
    }
    onLoadError(e: Error, now: number, item: any) {
    }
    onLoadComplete(all: number) {
    }

}