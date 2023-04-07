import * as scg from 'canvas-2d-game';

export default class Plane extends scg.Group {
    // 实体
    private _planeImg!: scg.Image;
    private _collideBlock!: scg.Group;
    // 属性
    private _hp!: number;
    init() {
        super.init();
        this.originX = this.originY = 0.5;
        this.penetrated = true;
    }
    setPlaneSkin(name: string) {
        if (this._planeImg) return;
        this._planeImg = new scg.Image({ x: 0, y: 0, height: this.height, width: this.width }, name);
        this._planeImg.penetrated = true;
        this.addChild(this._planeImg);
    }
}