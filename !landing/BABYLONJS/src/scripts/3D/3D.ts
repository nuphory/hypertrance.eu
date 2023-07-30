import {
	PostProcessRenderEffect,
	Scene,
	Engine,
	SceneLoader,
	Color4,
	Vector3,
	DefaultRenderingPipeline,
	Effect,
	PostProcess,
	Texture,
	type ILoadingScreen
} from '@babylonjs/core';
// import { Inspector } from "@babylonjs/inspector"
import { fresnel_material } from './fresnel_mat';
import Stats from 'stats-js';
import { distort_frag } from './frag_bg_distort_postfx';
import '@babylonjs/loaders/glTF';
export default class THREED {
    engine: Engine
    scene: Scene
    stats: Stats
    canvas
    camera
    camera_pivot
    lights: []
    init_rotation: Vector3
    frames_count: 0
    mouse_y = 0
    mouse_x = 0
    rotation_speed = 0
    constructor(canvas: HTMLCanvasElement, public on_loading?: () => void, public on_loaded?: () => void) {
        this.engine = new Engine(canvas)
        this.scene = new Scene(this.engine)
        this.canvas = canvas
        this.stats = new Stats();
        this.stats.showPanel(0)
        document.body.appendChild(this.stats.dom)
        this.mouse_y = this.mouse_x = 0
        this.frames_count = 0
        window.addEventListener("resize", () => {
            this.engine.resize()
        })
        this.engine.loadingScreen = new CustomLoading(on_loading, on_loaded)
        this.engine.displayLoadingUI()
        this.init()
    }

	async init() {
		this.scene.clearColor = new Color4(0, 0, 0, 0);
		SceneLoader.AppendAsync('/', 'cinema_compressed.glb', this.scene).then(() => {
			//this.scene.cameras[0].attachControl(this.canvas, true)
			this.scene.cameras[0].maxZ = 3000;
			this.scene.cameras[0].minZ = 1;

			this.scene.activeCamera = this.scene.cameras[0];

			this.camera = this.scene.cameras[0];
			this.camera.parent.rotation = this.camera.parent.rotationQuaternion.clone().toEulerAngles();
			this.camera_pivot = this.camera.parent.parent;
			//this.angle = this.camera_pivot.rotationQuaternion.clone().toEulerAngles()
			this.init_rotation = this.camera_pivot.rotationQuaternion.clone().toEulerAngles();
			this.camera_pivot.rotation = this.camera_pivot.rotationQuaternion.clone().toEulerAngles();
			const fresnel_mat = fresnel_material();
			fresnel_mat.backFaceCulling = false;
			for (const mesh of this.scene.meshes) {
				mesh.material = fresnel_mat;
			}
			// Inspector.Show(this.scene, {})
			window.addEventListener('mousemove', (e) => {
				this.mouse_x = document.documentElement.clientWidth / 2 - e.clientX;
				this.mouse_y = document.documentElement.clientHeight / 2 - e.clientY;
			});
			this.create_pipeline();
			this.animate();
		});
	}

	animate() {
		this.stats.begin();

		this.frames_count++;
		if (this.rotation_speed <= 0.005) this.rotation_speed += 0.00001;
		const offset = new Vector3(
			this.mouse_x * -0.00007,
			this.mouse_y * -0.00005,
			this.frames_count * this.rotation_speed
		);
		this.camera_pivot.rotation.copyFrom(this.init_rotation.add(offset));

		this.scene.render();
		this.stats.end();
		this.engine.hideLoadingUI();

		requestAnimationFrame(this.animate.bind(this));
		this.stats.update();
	}
	create_pipeline() {
		Effect.ShadersStore['distortFragmentShader'] = distort_frag;

		const default_pipeline = new DefaultRenderingPipeline(
			'DefaultPipe',
			false,
			this.scene,
			this.scene.cameras
		);
		default_pipeline.samples = 4;

		const distort_postprocess = new PostProcess(
			'distort',
			'distort',
			[],
			[],
			1,
			this.camera,
			Texture.TRILINEAR_SAMPLINGMODE,
			this.scene.getEngine(),
			false,
			null,
			0
		);
		const distort_postprocess_effect = new PostProcessRenderEffect(
			this.scene.getEngine(),
			'distorteffect',
			() => {
				return [distort_postprocess];
			}
		);

		default_pipeline.addEffect(distort_postprocess_effect);
		distort_postprocess.onApply = (effect) => {
			effect.setFloat2('screenSize', distort_postprocess.width, distort_postprocess.height);
		};
		if (default_pipeline.isSupported) {
			default_pipeline.imageProcessingEnabled = true;
			default_pipeline.grainEnabled = true;
			default_pipeline.grain.intensity = 20;
			default_pipeline.grain.animated = true;
			default_pipeline.bloomEnabled = true;
			default_pipeline.bloomThreshold = 0.4;
			default_pipeline.bloomWeight = 0.8;
			default_pipeline.bloomKernel = 64;
			default_pipeline.bloomScale = 1;
		}
	}
}
class CustomLoading implements ILoadingScreen {
	public loadingUIBackgroundColor: string;
	public loadingUIText: string;
	constructor(public on_loading?: () => void, public on_loaded?: () => void) {}
	public displayLoadingUI(): void {
		if (this.on_loading) this.on_loading();
	}
	public hideLoadingUI(): void {
		if (this.on_loaded) this.on_loaded();
	}
}
