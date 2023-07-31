import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import *  as MOD from 'three/examples/jsm/libs/meshopt_decoder.module.js';

const loader = new GLTFLoader();
loader.setMeshoptDecoder(MOD);

import obj from '$lib/assets/obj/cinema-compressed.glb';

let scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(150, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(-5, 5, -5).normalize();
scene.add(directionalLight);

const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemisphereLight.position.set(3, 3, 3);
scene.add(hemisphereLight);

loader.load(
	obj,
	(gltf) => {
		scene.add(gltf.scene);

		gltf.animations;
		gltf.scene;
		gltf.scenes;
		gltf.cameras;
		gltf.asset;

		const material = new THREE.MeshStandardMaterial({
			color: 0x00ff00,
			metalness: 0.13
		});


                animate();
	},
	(xhr) => {
		console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
	},

	(error) => {
		console.log(error);
	}
);

console.log(scene);

let renderer;

const animate = () => {
	requestAnimationFrame(animate);
        scene.children[2].rotation.y += 0.001;
	renderer.render(scene, camera);
};

const resize = () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
};

export const createScene = (el) => {
	renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
	resize();
};

window.addEventListener('resize', resize);
