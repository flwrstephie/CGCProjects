// Stephanie Pearl F. Virtudazo
// Computer Graphics Computing Module 2 Quiz 2

// Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cube Geometry
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1); // width, height, depth
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xEF7627 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = -6;
cube.position.y = -2;

scene.add(cube);

// Cone Geometry
const coneGeometry = new THREE.ConeGeometry(1.2, 2, 10); // radius, height, radialSegments
const coneMaterial = new THREE.MeshBasicMaterial({ color: 0xD52D00 });
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.x = 6;
cone.position.y = 2;

scene.add(cone);

// Cylinder Geometry
const cylindergeometry = new THREE.CylinderGeometry( 0.9, 0.9, 1, 10); // radiusTop, radiusBottom, height, radialSegments
const cylindermaterial = new THREE.MeshBasicMaterial( {color: 0xA30262 } ); 
const cylinder = new THREE.Mesh(cylindergeometry, cylindermaterial);
cylinder.position.x = -6;
cylinder.position.y = 2;

scene.add(cylinder);

// Sphere Geometry
const spheregeometry = new THREE.SphereGeometry(1, 28, 16 ); // radius, widthSegments, heightSegments
const spherematerial = new THREE.MeshBasicMaterial( { color: 0xB55690 } ); 
const sphere = new THREE.Mesh( spheregeometry, spherematerial ); 
sphere.position.x = 6;
sphere.position.y = -2;

scene.add( sphere );

// Torus Geometry
const torusgeometry = new THREE.TorusGeometry( 1.5, 0.8, 16, 81 ); // radius, tube, radialSegments, tubularSegments
const torusmaterial = new THREE.MeshBasicMaterial( { color: 0xfFFFFFF } ); 
const torus = new THREE.Mesh( torusgeometry, torusmaterial ); 
scene.add( torus );

camera.position.z = 5;

// Geometry Animations
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  cone.rotation.x += 0.01;
  cone.rotation.y += 0.01;

  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.01;

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
