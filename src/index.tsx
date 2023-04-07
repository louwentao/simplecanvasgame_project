import ResourcesLoader from './resources-loader';
import resourcesList from './resourcesList.json';
import * as scg from 'canvas-2d-game'

console.log(scg)
scg.setResourceList(resourcesList);
const game = new scg.MainGame({ id: 'canvas', h: 850, w: 400 });
scg.Resource.addResources('first', () => { }, () => { }, () => {
    const loader = new ResourcesLoader({ x: 0, y: 0, height: 850, width: 400 }, 'resources');
    game.addChild(loader);
}, undefined);

export { };