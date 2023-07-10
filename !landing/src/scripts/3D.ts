import * as THREE from "three";
import { GLTFLoader, } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
import * as Stats from "stats-js"
export default class THREED {
    scene
    clock
    stats
    renderer
    canvas
    loading_manager
    loader
    camera
    lights: []
    dbg_orbit_controls
    constructor(canvas) {
        this.scene = new THREE.Scene()
        this.clock = new THREE.Clock()
        this.clock.start()
        this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas, alpha: true })
        this.canvas = canvas
        this.loading_manager = new THREE.LoadingManager()
        this.loading_manager.onLoad = () => {
            // this.animate()
        }
        //scene loader
        this.loader = new GLTFLoader(this.loading_manager)
        //rendering settings
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping
        this.renderer.toneMappingExposure = 2.2

        this.renderer.setSize(canvas.clientWidth, canvas.clientHeight)
        this.renderer.setPixelRatio(window.devicePixelRatio)

        this.stats = new Stats();
        this.stats.showPanel(0)
        document.body.appendChild(this.stats.dom)
        /* DBG settings */
        this.dbg_orbit_controls = new OrbitControls(this.camera, canvas)
        this.dbg_orbit_controls.screenSpacePanning = false;


        window.addEventListener("resize", () => {
            this.on_resize()
        })
    }
    init() {
        this.loader.load("/model.gltf", (gltf) => {
            this.camera = gltf.scene.getObjectByName("Camera")
            for (const light of this.lights) {
                this.scene.add(light)
            }
            this.scene.add(gltf.scene)
        })
    }
    on_resize() {
        const width = this.canvas.parentElement.clientWidth
        const height = this.canvas.parentElement.clientHeight
        const pixel_ratio = window.devicePixelRatio
        this.camera.aspect = width / height
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(width, height)
        this.renderer.setPixelRatio(pixel_ratio)
    }
    animate() {
        this.stats.begin();

        this.renderer.render(this.scene, this.camera);

        this.stats.begin();
        requestAnimationFrame(this.animate.bind(this))
    }
}