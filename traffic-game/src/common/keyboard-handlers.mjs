import { setAccelerate, setDecelerate, cameraWidth } from '../store/state.mjs';
import { startGame } from '../index.mjs';
import { accelerateButton, decelerateButton } from '../store/elements.mjs';
import { camera, renderer, scene } from './init-tree-js.mjs';
import { positionScoreElement } from './utils.mjs';
import { reset } from './reset.mjs';

accelerateButton.addEventListener('mousedown', function () {
  startGame();
  setAccelerate(true);
});

decelerateButton.addEventListener('mousedown', function () {
  startGame();
  setDecelerate(true);
});

accelerateButton.addEventListener('mouseup', function () {
  setAccelerate(false);
});

decelerateButton.addEventListener('mouseup', function () {
  setDecelerate(false);
});

window.addEventListener('keydown', function (event) {
  if (event.key == 'ArrowUp') {
    startGame();
    setDecelerate(false);
    setAccelerate(true);
    return;
  }
  if (event.key == 'ArrowDown') {
    setAccelerate(false);
    setDecelerate(true);
    return;
  }
  if (event.key == 'R' || event.key == 'r') {
    reset();
    return;
  }
});

window.addEventListener('keyup', function (event) {
  if (event.key == 'ArrowUp') {
    setAccelerate(false);
    return;
  }
  if (event.key == 'ArrowDown') {
    setDecelerate(false);
    return;
  }
});

window.addEventListener('resize', () => {
  console.log('resize', window.innerWidth, window.innerHeight);

  const newAspectRatio = window.innerWidth / window.innerHeight;
  const adjustedCameraHeight = cameraWidth / newAspectRatio;

  camera.top = adjustedCameraHeight / 2;
  camera.bottom = adjustedCameraHeight / -2;
  camera.updateProjectionMatrix(); // Must be called after change

  positionScoreElement();

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.render(scene, camera);
});
