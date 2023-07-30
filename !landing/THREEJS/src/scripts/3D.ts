import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
//import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
import Stats from 'three/examples/jsm/libs/stats.module';
import { MeshFresnelMaterial } from './fresnel_mat';
export default class THREED {
	scene;
	clock;
	stats;
	renderer;
	canvas;
	loading_manager;
	loader;
	draco_loader;
	camera;
	lights: [];
	dbg_orbit_controls;

	constructor(canvas) {
		this.scene = new THREE.Scene();
		this.clock = new THREE.Clock();
		this.clock.start();
		this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas, alpha: false });
		this.canvas = canvas;
		this.loading_manager = new THREE.LoadingManager();
		this.loading_manager.onLoad = () => {
			this.animate();
		};
		//scene loader
		this.loader = new GLTFLoader(this.loading_manager);
		this.draco_loader = new DRACOLoader();
		this.draco_loader.setDecoderPath('/draco/');
		this.loader.setDRACOLoader(this.draco_loader);

		//rendering settings
		this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
		this.renderer.toneMappingExposure = 2.2;

		this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
		this.renderer.setPixelRatio(window.devicePixelRatio);

		this.stats = new Stats();
		this.stats.showPanel(0);
		document.body.appendChild(this.stats.dom);

		window.addEventListener('resize', () => {
			this.on_resize();
		});
		this.init();
	}
	init() {
		this.loader.load('/jackflash_standin.glb', (gltf) => {
			this.camera = gltf.scene.getObjectByName('Camera007').children[0];
			this.camera.far = 100000;
			/*for (const light of this.lights) {
                this.scene.add(light)
            }*/
			this.scene.add(gltf.scene);
			this.scene.overrideMaterial = MeshFresnelMaterial;
			this.on_resize();

			/* DBG settings, has to be here cuz camera defined here not in constructor :( */
			this.dbg_orbit_controls = new OrbitControls(this.camera, this.canvas);
			this.dbg_orbit_controls.screenSpacePanning = false;
		});
	}
	on_resize() {
		this.canvas.setAttribute('height', this.canvas.parentElement.clientHeight);
		this.canvas.setAttribute('width', this.canvas.parentElement.clientWidth);
		const width = this.canvas.parentElement.clientWidth;
		const height = this.canvas.parentElement.clientHeight;
		const pixel_ratio = window.devicePixelRatio;
		this.camera.aspect = width / height;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(width, height);
		this.renderer.setPixelRatio(pixel_ratio);
	}
	animate() {
		this.stats.begin();
		this.dbg_orbit_controls.update();
		this.camera.rot;
		this.renderer.render(this.scene, this.camera);
		this.stats.begin();
		requestAnimationFrame(this.animate.bind(this));
		this.stats.update();
	}
}
