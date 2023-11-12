import {
  setPlayerAngleMoved,
  setScore,
  otherVehicles,
  setOtherVehicles,
  setLastTimestamp,
  setReady,
} from '../store/state.mjs';
import { scoreElement, resultsElement } from '../store/elements.mjs';
import { movePlayerCar } from '../engine/animation.mjs';
import { renderer, scene, camera } from './init-tree-js.mjs';
import { hidePlayerCarHitZones } from '../car/car.mjs';
import { config } from '../../config.mjs';

export function reset() {
  setPlayerAngleMoved(0);
  setScore(0);
  scoreElement.innerText = 'Press UP';

  otherVehicles.forEach((vehicle) => {
    scene.remove(vehicle.mesh);

    if (vehicle.mesh.userData.hitZone1)
      scene.remove(vehicle.mesh.userData.hitZone1);
    if (vehicle.mesh.userData.hitZone2)
      scene.remove(vehicle.mesh.userData.hitZone2);
    if (vehicle.mesh.userData.hitZone3)
      scene.remove(vehicle.mesh.userData.hitZone3);
  });
  setOtherVehicles([]);

  if (config.showHitZones) {
    hidePlayerCarHitZones();
  }

  resultsElement.style.display = 'none';

  setLastTimestamp(undefined);

  movePlayerCar(0);

  renderer.render(scene, camera);
  renderer.setAnimationLoop(null);

  setReady(true);
}

reset();
