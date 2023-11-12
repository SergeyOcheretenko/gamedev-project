import { arcCenterX, cameraWidth } from '../store/state.mjs';
import { scoreElement } from '../store/elements.mjs';

export function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function getPlayerSpeed(accelerate, decelerate, speed) {
  if (accelerate) return speed * 2;
  if (decelerate) return speed * 0.5;
  return speed;
}

export function positionScoreElement() {
  const arcCenterXinPixels = (arcCenterX / cameraWidth) * window.innerWidth;
  scoreElement.style.cssText = `
    left: ${window.innerWidth / 2 - arcCenterXinPixels * 1.3}px;
    top: ${window.innerHeight / 2}px
  `;
}

export function getDistance(coordinate1, coordinate2) {
  const horizontalDistance = coordinate2.x - coordinate1.x;
  const verticalDistance = coordinate2.y - coordinate1.y;
  return Math.sqrt(horizontalDistance ** 2 + verticalDistance ** 2);
}
