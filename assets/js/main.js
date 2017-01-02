'use strict';

require('../css/style.scss');

import Babylon from 'babylonjs';
import Cannon from 'cannon';

const canvas = document.querySelector('#renderCanvas');
const engine = new Babylon.Engine(canvas, true);

const createScene = function() {
    const scene = new Babylon.Scene(engine);
    const camera = new Babylon.FreeCamera('user', new Babylon.Vector3(0, 5, -10), scene);

    camera.setTarget(Babylon.Vector3.Zero());
    camera.attachControl(canvas, false);

    const light = new Babylon.HemisphericLight('light', new Babylon.Vector3(0, 1, 0), scene);
    const ground = Babylon.Mesh.CreateGround('ground1', 20, 20, 2, scene);

    const box = Babylon.Mesh.CreateBox('box', 2, scene, false, Babylon.Mesh.DEFAULTSIDE);

    box.position.y = 1;

    return scene;
};

const scene = createScene();

engine.runRenderLoop(() => {
    scene.render();
});

window.addEventListener('resize', event => {
    engine.resize();
});
