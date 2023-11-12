import { pickRandom } from '../common/utils.mjs';
import { vehicleColors } from '../store/state.mjs';
import { Wheel } from './wheel.mjs';
import { config } from '../../config.mjs';
import { HitZone } from './hit-zone.mjs';
import { playerCar } from '../map/render-map.mjs';

export function Car() {
  const car = new THREE.Group();

  const color = pickRandom(vehicleColors);

  const main = new THREE.Mesh(
    new THREE.BoxBufferGeometry(60, 30, 15),
    new THREE.MeshLambertMaterial({ color })
  );
  main.position.z = 12;
  main.castShadow = true;
  main.receiveShadow = true;
  car.add(main);

  const carFrontTexture = getCarFrontTexture();
  carFrontTexture.center = new THREE.Vector2(0.5, 0.5);
  carFrontTexture.rotation = Math.PI / 2;

  const carBackTexture = getCarFrontTexture();
  carBackTexture.center = new THREE.Vector2(0.5, 0.5);
  carBackTexture.rotation = -Math.PI / 2;

  const carLeftSideTexture = getCarSideTexture();
  carLeftSideTexture.flipY = false;

  const carRightSideTexture = getCarSideTexture();

  const cabin = new THREE.Mesh(new THREE.BoxBufferGeometry(33, 24, 12), [
    new THREE.MeshLambertMaterial({ map: carFrontTexture }),
    new THREE.MeshLambertMaterial({ map: carBackTexture }),
    new THREE.MeshLambertMaterial({ map: carLeftSideTexture }),
    new THREE.MeshLambertMaterial({ map: carRightSideTexture }),
    new THREE.MeshLambertMaterial({ color: 0xffffff }), // top
    new THREE.MeshLambertMaterial({ color: 0xffffff }), // bottom
  ]);
  cabin.position.x = -6;
  cabin.position.z = 25.5;
  cabin.castShadow = true;
  cabin.receiveShadow = true;
  car.add(cabin);

  const backWheel = new Wheel();
  backWheel.position.x = -18;
  car.add(backWheel);

  const frontWheel = new Wheel();
  frontWheel.position.x = 18;
  car.add(frontWheel);

  if (config.showHitZones) {
    car.userData.hitZone1 = HitZone();
    car.userData.hitZone2 = HitZone();
  }

  return car;
}

function getCarFrontTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 32;
  const context = canvas.getContext('2d');

  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, 64, 32);

  context.fillStyle = '#666666';
  context.fillRect(8, 8, 48, 24);

  return new THREE.CanvasTexture(canvas);
}

function getCarSideTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 32;
  const context = canvas.getContext('2d');

  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, 128, 32);

  context.fillStyle = '#666666';
  context.fillRect(10, 8, 38, 24);
  context.fillRect(58, 8, 60, 24);

  return new THREE.CanvasTexture(canvas);
}

export function hidePlayerCarHitZones() {
  playerCar.userData.hitZone1.visible = false;
  playerCar.userData.hitZone2.visible = false;
}

export function showPlayerCarHitZones() {
  playerCar.userData.hitZone1.visible = true;
  playerCar.userData.hitZone2.visible = true;
}
