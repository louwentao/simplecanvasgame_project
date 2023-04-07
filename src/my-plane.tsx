import * as scg from 'canvas-2d-game';
import Plane from './plane';

export default class MyPlane extends Plane{
    init(){
        super.init();
        this.penetrated = true;
    }
}