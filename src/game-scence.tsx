import * as scg from 'canvas-2d-game';
import MyPlane from './my-plane';

export default class GameScence extends scg.Group {
    private _background_1!: scg.Image;
    private _background_2!: scg.Image;
    private _myPlane!: MyPlane;
    init() {
        super.init();
        const { height, width } = this;
        this._background_1 = new scg.Image({ x: 0, y: 0, width, height }, 'map_1');
        this._background_2 = new scg.Image({ x: 0, y: -height, width, height }, 'map_1');
        this._background_1.penetrated = this._background_2.penetrated = true;
        this.addChild(this._background_1);
        this.addChild(this._background_2);
        this._myPlane = new MyPlane({ x: 0.5 * width, y: 0.8 * height, height: 100, width: 100 });
        this._myPlane.setPlaneSkin('myPlane_1');
        this._myPlane.penetrated = true;
        this.addChild(this._myPlane);

        this.on(scg.Event.MOUSE_MOVE, this.mouseMoveHandl, this);
    }
    private mouseMoveHandl(e: any) {
        const { parentPosition } = e;
        this._myPlane.x = parentPosition.x;
        this._myPlane.y = parentPosition.y;
    }
    updata(frameNum: number): void {
        super.updata(frameNum);
        this._background_1.y += 10;
        this._background_2.y += 10;
        if (this._background_1.y >= this.height) {
            this._background_1.y = -this.height;
            this._background_2.y = 0;
        }
        if (this._background_2.y >= this.height) {
            this._background_2.y = -this.height;
            this._background_1.y = 0;
        }
    }
}