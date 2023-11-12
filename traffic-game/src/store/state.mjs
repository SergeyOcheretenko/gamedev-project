export const playerAngleInitial = Math.PI;
export const speed = 0.0017;
export const aspectRatio = window.innerWidth / window.innerHeight;
export const cameraWidth = 960;
export const cameraHeight = cameraWidth / aspectRatio;

export const vehicleColors = [
  0xa52523, 0xef2d56, 0x0ad3ff, 0xff9f1c, 0xa52523, 0xbdb638, 0x78b14b,
];

export const lawnGreen = '#67C240';
export const trackColor = '#546E90';
export const edgeColor = '#725F48';
export const treeCrownColor = 0x498c2c;
export const treeTrunkColor = 0x4b3f2f;

export const trackRadius = 225;
export const trackWidth = 45;
export const innerTrackRadius = trackRadius - trackWidth;
export const outerTrackRadius = trackRadius + trackWidth;

export const arcAngle1 = (1 / 3) * Math.PI;
export const deltaY = Math.sin(arcAngle1) * innerTrackRadius;
export const arcAngle2 = Math.asin(deltaY / outerTrackRadius);

export const arcCenterX =
  (Math.cos(arcAngle1) * innerTrackRadius +
    Math.cos(arcAngle2) * outerTrackRadius) /
  2;

export const arcAngle3 = Math.acos(arcCenterX / innerTrackRadius);
export const arcAngle4 = Math.acos(arcCenterX / outerTrackRadius);

export let accelerate = false;
export function setAccelerate(value) {
  accelerate = value;
}

export let decelerate = false;
export function setDecelerate(value) {
  decelerate = value;
}

export let score;
export function setScore(value) {
  score = value;
}

export let playerAngleMoved;
export function setPlayerAngleMoved(value) {
  playerAngleMoved = value;
}

export let ready;
export function setReady(value) {
  ready = value;
}

export let lastTimestamp;
export function setLastTimestamp(value) {
  lastTimestamp = value;
}

export let otherVehicles = [];
export function setOtherVehicles(value) {
  otherVehicles = value;
}
