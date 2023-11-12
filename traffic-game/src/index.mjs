import './map/render-map.mjs';
import './common/keyboard-handlers.mjs';
import { setReady, ready } from './store/state.mjs';
import {
  instructionsElement,
  buttonsElement,
  scoreElement,
} from './store/elements.mjs';
import { animation } from './engine/animation.mjs';
import { renderer } from './common/init-tree-js.mjs';
import { showPlayerCarHitZones } from './car/car.mjs';
import { config } from '../config.mjs';

window.focus();

setTimeout(() => {
  if (ready) instructionsElement.style.opacity = 1;
  buttonsElement.style.opacity = 1;
}, 4000);

export function startGame() {
  if (ready) {
    setReady(false);
    scoreElement.innerText = 0;
    buttonsElement.style.opacity = 1;
    instructionsElement.style.opacity = 0;
    renderer.setAnimationLoop(animation);

    if (config.showHitZones) {
      showPlayerCarHitZones();
    }
  }
}
