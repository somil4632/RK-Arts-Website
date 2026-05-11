import * as THREE from 'https://unpkg.com/three@0.165.0/build/three.module.js';
const scene = new THREE.Scene();
const header = document.querySelector('header')
const camera = new THREE.PerspectiveCamera(75,header.clientWidth / header.clientHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#logo'),
    alpha :true
});

renderer.setSize(header.clientWidth, header.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);


const geo = new THREE.BoxGeometry(0.1,1.3,3);
const texture = new THREE.TextureLoader().load('../assets/3d logo.png');
const mat = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geo,mat);


cube.position.y = 0;
cube.position.z = -0.5;

scene.add( cube );
const point_geo = new THREE.TorusGeometry(3,0.4,10,100);
const point_tex = new THREE.PointsMaterial({color:'white', size:0.05});
const point = new THREE.Points(point_geo,point_tex);
scene.add(point);
point.position.y =1.6;


camera.position.z = 2.5;
function animate(){
    requestAnimationFrame(animate);
    cube.rotation.y += 0.015;
    point.rotation.y += 0.02;
    point.rotation.x += 0.02;

    renderer.render(scene,camera);
}
animate()