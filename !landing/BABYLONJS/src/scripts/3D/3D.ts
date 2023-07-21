import { PostProcessRenderEffect, Scene, Engine, SceneLoader, Color4, Vector3, DefaultRenderingPipeline, Effect, PostProcess, Texture } from "@babylonjs/core"
import { Inspector } from "@babylonjs/inspector"
import { fresnel_material } from "./fresnel_mat"
import Stats from "stats-js"
import { shatter_frag } from "./frag_shatter_postfx"
import "@babylonjs/loaders/glTF"
export default class THREED {
    engine: Engine
    scene: Scene
    stats: Stats
    canvas
    camera
    camera_pivot
    lights: []
    init_rotation: Vector3
    frames_count: number
    mouse_y
    mouse_x
    constructor(canvas: HTMLCanvasElement) {
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
        this.init()
    }

    async init() {
        this.scene.clearColor = new Color4(0, 0, 0, 0)
        SceneLoader.AppendAsync("/", "cinema_compressed.glb", this.scene).then(() => {
            this.scene.cameras[0].attachControl(this.canvas, true)
            this.scene.cameras[0].maxZ = 3000
            this.scene.cameras[0].minZ = 1

            this.scene.activeCamera = this.scene.cameras[0];

            this.camera = this.scene.cameras[0];
            this.camera.parent.rotation = this.camera.parent.rotationQuaternion.clone().toEulerAngles()
            this.camera_pivot = this.camera.parent.parent
            //this.angle = this.camera_pivot.rotationQuaternion.clone().toEulerAngles()
            this.init_rotation = this.camera_pivot.rotationQuaternion.clone().toEulerAngles()
            this.camera_pivot.rotation = this.camera_pivot.rotationQuaternion.clone().toEulerAngles()
            const fresnel_mat = fresnel_material()
            fresnel_mat.backFaceCulling = false
            for (const mesh of this.scene.meshes) {
                mesh.material = fresnel_mat
            }
            Inspector.Show(this.scene, {})
            window.addEventListener("mousemove", (e) => {
                this.mouse_x = (document.documentElement.clientWidth / 2 - e.clientX)
                this.mouse_y = (document.documentElement.clientHeight / 2 - e.clientY)
            })
            this.create_pipeline()
            this.animate()
        })
    }

    animate() {
        this.frames_count++
        this.stats.begin()
        const offset = new Vector3(this.mouse_x * -0.00007, this.mouse_y * -0.00005, this.frames_count * 0.005)
        this.camera_pivot.rotation.copyFrom(this.init_rotation.add(offset))

        this.scene.render()
        this.stats.end()

        requestAnimationFrame(this.animate.bind(this))
        this.stats.update()
    }
    create_pipeline() {
        Effect.ShadersStore["shatterFragmentShader"] = shatter_frag

        const default_pipeline = new DefaultRenderingPipeline("DefaultPipe", false, this.scene, this.scene.cameras)
        default_pipeline.samples = 4

        const shatter_postprocess = new PostProcess("shatter", "shatter", ["screenSize"], null, 1, null, Texture.TRILINEAR_SAMPLINGMODE, this.scene.getEngine(), false, null, 0)
        shatter_postprocess.onApply = function (effect) {
            effect.setFloat2("screenSize", shatter_postprocess.width, shatter_postprocess.height)
        }

        const shatter_postprocess_effect = new PostProcessRenderEffect(this.scene.getEngine(), "shattereffect", () => { return [shatter_postprocess] })

        default_pipeline.addEffect(shatter_postprocess_effect)

        this.scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline("DefaultPipe", this.camera, false)

        if (default_pipeline.isSupported) {
            default_pipeline.imageProcessingEnabled = true
            default_pipeline.grainEnabled = true
            default_pipeline.grain.intensity = 20
            default_pipeline.grain.animated = true
        }
    }
}