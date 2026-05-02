import * as THREE from 'https://unpkg.com/three@0.165.0/build/three.module.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#logo')
});
renderer.setSize(window.innerWidth,window.innerHeight);

renderer.render(scene,camera);

const geo = new THREE.BoxGeometry(2,1,0.1);
const mat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geo,mat);

scene.add( cube );
camera.position.z = 5;
function animate(){
    requestAnimationFrame(animate);
    cube.rotation.y += 0.01;
    renderer.render(scene,camera);
}
animate();