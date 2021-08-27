/* global THREE */
const section = document.querySelector("section");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, section.clientWidth / section.clientHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( section.clientWidth, section.clientHeight );
section.appendChild( renderer.domElement );

const dpi = 30;
const geometry = new THREE.SphereGeometry(3, dpi, dpi);
const material = new THREE.MeshBasicMaterial( { 
  color: 0x00ff00,
  wireframe: true,
} );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

camera.position.z = 10;

function  animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
}
animate();