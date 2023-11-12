export const wheelGeometry = new THREE.BoxBufferGeometry(12, 33, 12);
export const wheelMaterial = new THREE.MeshLambertMaterial({ color: 0x333333 });

export function Wheel() {
  const wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
  wheel.position.z = 6;
  wheel.castShadow = false;
  wheel.receiveShadow = false;
  return wheel;
}
