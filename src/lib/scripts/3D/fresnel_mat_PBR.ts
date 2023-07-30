import {
	ReflectionBlock,
	Color3,
	FragmentOutputBlock,
	GradientBlockColorStep,
	InputBlock,
	TransformBlock,
	NodeMaterial,
	VertexOutputBlock,
	NodeMaterialSystemValues,
	GradientBlock,
	LerpBlock,
	Vector2,
	RemapBlock,
	AnimatedInputBlockTypes,
	FresnelBlock,
	ViewDirectionBlock,
	PBRMetallicRoughnessBlock,
	ScaleBlock
} from '@babylonjs/core';
import { SheenBlock } from '@babylonjs/core';
export function fresnel_material(): NodeMaterial {
	const nodeMaterial = new NodeMaterial('node');

	// InputBlock
	const position = new InputBlock('position');
	position.visibleInInspector = false;
	position.visibleOnFrame = false;
	position.target = 1;
	position.setAsAttribute('position');

	// TransformBlock
	const WorldPos = new TransformBlock('WorldPos');
	WorldPos.visibleInInspector = false;
	WorldPos.visibleOnFrame = false;
	WorldPos.target = 1;
	WorldPos.complementZ = 0;
	WorldPos.complementW = 1;

	// InputBlock
	const World = new InputBlock('World');
	World.visibleInInspector = false;
	World.visibleOnFrame = false;
	World.target = 1;
	World.setAsSystemValue(NodeMaterialSystemValues.World);

	// TransformBlock
	const Worldnormal = new TransformBlock('World normal');
	Worldnormal.visibleInInspector = false;
	Worldnormal.visibleOnFrame = false;
	Worldnormal.target = 1;
	Worldnormal.complementZ = 0;
	Worldnormal.complementW = 0;

	// InputBlock
	const normal = new InputBlock('normal');
	normal.visibleInInspector = false;
	normal.visibleOnFrame = false;
	normal.target = 1;
	normal.setAsAttribute('normal');

	// PBRMetallicRoughnessBlock
	const PBRMetallicRoughness = new PBRMetallicRoughnessBlock('PBRMetallicRoughness');
	PBRMetallicRoughness.visibleInInspector = false;
	PBRMetallicRoughness.visibleOnFrame = false;
	PBRMetallicRoughness.target = 3;
	PBRMetallicRoughness.lightFalloff = 2;
	PBRMetallicRoughness.useAlphaTest = false;
	PBRMetallicRoughness.alphaTestCutoff = 1;
	PBRMetallicRoughness.useAlphaBlending = false;
	PBRMetallicRoughness.useRadianceOverAlpha = true;
	PBRMetallicRoughness.useSpecularOverAlpha = true;
	PBRMetallicRoughness.enableSpecularAntiAliasing = false;
	PBRMetallicRoughness.realTimeFiltering = false;
	PBRMetallicRoughness.realTimeFilteringQuality = 8;
	PBRMetallicRoughness.useEnergyConservation = true;
	PBRMetallicRoughness.useRadianceOcclusion = true;
	PBRMetallicRoughness.useHorizonOcclusion = true;
	PBRMetallicRoughness.unlit = false;
	PBRMetallicRoughness.forceNormalForward = false;
	PBRMetallicRoughness.debugMode = 0;
	PBRMetallicRoughness.debugLimit = 0;
	PBRMetallicRoughness.debugFactor = 1;

	// InputBlock
	const view = new InputBlock('view');
	view.visibleInInspector = false;
	view.visibleOnFrame = false;
	view.target = 1;
	view.setAsSystemValue(NodeMaterialSystemValues.View);

	// InputBlock
	const cameraPosition = new InputBlock('cameraPosition');
	cameraPosition.visibleInInspector = false;
	cameraPosition.visibleOnFrame = false;
	cameraPosition.target = 1;
	cameraPosition.setAsSystemValue(NodeMaterialSystemValues.CameraPosition);

	// ViewDirectionBlock
	const Viewdirection = new ViewDirectionBlock('View direction');
	Viewdirection.visibleInInspector = false;
	Viewdirection.visibleOnFrame = false;
	Viewdirection.target = 4;

	// FresnelBlock
	const Fresnel = new FresnelBlock('Fresnel');
	Fresnel.visibleInInspector = false;
	Fresnel.visibleOnFrame = false;
	Fresnel.target = 4;

	// InputBlock
	const bias = new InputBlock('bias');
	bias.visibleInInspector = false;
	bias.visibleOnFrame = false;
	bias.target = 1;
	bias.value = 0.3;
	bias.min = 0;
	bias.max = 0;
	bias.isBoolean = false;
	bias.matrixMode = 0;
	bias.animationType = AnimatedInputBlockTypes.None;
	bias.isConstant = false;

	// InputBlock
	const power = new InputBlock('power');
	power.visibleInInspector = false;
	power.visibleOnFrame = false;
	power.target = 1;
	power.value = 1;
	power.min = 0;
	power.max = 0;
	power.isBoolean = false;
	power.matrixMode = 0;
	power.animationType = AnimatedInputBlockTypes.None;
	power.isConstant = false;

	// RemapBlock
	const Remap = new RemapBlock('Remap');
	Remap.visibleInInspector = false;
	Remap.visibleOnFrame = false;
	Remap.target = 4;
	Remap.sourceRange = new Vector2(-1, 1);
	Remap.targetRange = new Vector2(0, 1);

	// InputBlock
	const edge = new InputBlock('edge');
	edge.visibleInInspector = true;
	edge.visibleOnFrame = false;
	edge.target = 1;
	edge.value = 0.62;
	edge.min = 0;
	edge.max = 1;
	edge.isBoolean = false;
	edge.matrixMode = 0;
	edge.animationType = AnimatedInputBlockTypes.None;
	edge.isConstant = false;

	// InputBlock
	const falloff = new InputBlock('falloff');
	falloff.visibleInInspector = true;
	falloff.visibleOnFrame = false;
	falloff.target = 1;
	falloff.value = 1;
	falloff.min = 0;
	falloff.max = 1;
	falloff.isBoolean = false;
	falloff.matrixMode = 0;
	falloff.animationType = AnimatedInputBlockTypes.None;
	falloff.isConstant = false;

	// GradientBlock
	const Gradient = new GradientBlock('Gradient');
	Gradient.visibleInInspector = false;
	Gradient.visibleOnFrame = false;
	Gradient.target = 4;
	Gradient.colorSteps = [];
	Gradient.colorSteps.push(
		new GradientBlockColorStep(0, new Color3(0.9058823529411765, 0.9921568627450981, 1))
	);
	Gradient.colorSteps.push(
		new GradientBlockColorStep(
			0.49,
			new Color3(0.34901960784313724, 0.6470588235294118, 0.6784313725490196)
		)
	);
	Gradient.colorSteps.push(
		new GradientBlockColorStep(
			1,
			new Color3(0.0784313725490196, 0.0784313725490196, 0.0784313725490196)
		)
	);

	// LerpBlock
	const Lerp = new LerpBlock('Lerp');
	Lerp.visibleInInspector = false;
	Lerp.visibleOnFrame = false;
	Lerp.target = 4;

	// InputBlock
	const Color = new InputBlock('Color3');
	Color.visibleInInspector = false;
	Color.visibleOnFrame = false;
	Color.target = 1;
	Color.value = new Color3(0.5333333333333333, 0.5333333333333333, 0.5333333333333333);
	Color.isConstant = false;

	// ScaleBlock
	const Scale = new ScaleBlock('Scale');
	Scale.visibleInInspector = false;
	Scale.visibleOnFrame = false;
	Scale.target = 4;

	// InputBlock
	const Float = new InputBlock('Float');
	Float.visibleInInspector = false;
	Float.visibleOnFrame = false;
	Float.target = 1;
	Float.value = 1.8;
	Float.min = 0;
	Float.max = 10;
	Float.isBoolean = false;
	Float.matrixMode = 0;
	Float.animationType = AnimatedInputBlockTypes.None;
	Float.isConstant = false;

	// FragmentOutputBlock
	const FragmentOutput = new FragmentOutputBlock('FragmentOutput');
	FragmentOutput.visibleInInspector = false;
	FragmentOutput.visibleOnFrame = false;
	FragmentOutput.target = 2;
	FragmentOutput.convertToGammaSpace = false;
	FragmentOutput.convertToLinearSpace = false;
	FragmentOutput.useLogarithmicDepth = false;

	// InputBlock
	const Float1 = new InputBlock('Float');
	Float1.visibleInInspector = false;
	Float1.visibleOnFrame = false;
	Float1.target = 1;
	Float1.value = 1;
	Float1.min = 0;
	Float1.max = 1;
	Float1.isBoolean = false;
	Float1.matrixMode = 0;
	Float1.animationType = AnimatedInputBlockTypes.None;
	Float1.isConstant = false;

	// InputBlock
	const Float2 = new InputBlock('Float');
	Float2.visibleInInspector = false;
	Float2.visibleOnFrame = false;
	Float2.target = 1;
	Float2.value = 0.2;
	Float2.min = 0;
	Float2.max = 1;
	Float2.isBoolean = false;
	Float2.matrixMode = 0;
	Float2.animationType = AnimatedInputBlockTypes.None;
	Float2.isConstant = false;

	// ReflectionBlock
	const reflectionBlock = new ReflectionBlock('ReflectionBlock');
	reflectionBlock.visibleInInspector = false;
	reflectionBlock.visibleOnFrame = false;
	reflectionBlock.target = 3;
	reflectionBlock.useSphericalHarmonics = true;
	reflectionBlock.forceIrradianceInFragment = false;

	// InputBlock
	const Color1 = new InputBlock('Color3');
	Color1.visibleInInspector = false;
	Color1.visibleOnFrame = false;
	Color1.target = 1;
	Color1.value = new Color3(0.34901960784313724, 0.6470588235294118, 0.6784313725490196);
	Color1.isConstant = false;

	// SheenBlock
	const sheenBlock = new SheenBlock('SheenBlock');
	sheenBlock.visibleInInspector = false;
	sheenBlock.visibleOnFrame = false;
	sheenBlock.target = 2;
	sheenBlock.albedoScaling = false;
	sheenBlock.linkSheenWithAlbedo = false;

	// InputBlock
	const Float3 = new InputBlock('Float');
	Float3.visibleInInspector = false;
	Float3.visibleOnFrame = false;
	Float3.target = 1;
	Float3.value = 10;
	Float3.min = 0;
	Float3.max = 10;
	Float3.isBoolean = false;
	Float3.matrixMode = 0;
	Float3.animationType = AnimatedInputBlockTypes.None;
	Float3.isConstant = false;

	// InputBlock
	const Float4 = new InputBlock('Float');
	Float4.visibleInInspector = false;
	Float4.visibleOnFrame = false;
	Float4.target = 1;
	Float4.value = 1;
	Float4.min = 0;
	Float4.max = 1;
	Float4.isBoolean = false;
	Float4.matrixMode = 0;
	Float4.animationType = AnimatedInputBlockTypes.None;
	Float4.isConstant = false;

	// TransformBlock
	const WorldPosViewProjectionTransform = new TransformBlock('WorldPos * ViewProjectionTransform');
	WorldPosViewProjectionTransform.visibleInInspector = false;
	WorldPosViewProjectionTransform.visibleOnFrame = false;
	WorldPosViewProjectionTransform.target = 1;
	WorldPosViewProjectionTransform.complementZ = 0;
	WorldPosViewProjectionTransform.complementW = 1;

	// InputBlock
	const ViewProjection = new InputBlock('ViewProjection');
	ViewProjection.visibleInInspector = false;
	ViewProjection.visibleOnFrame = false;
	ViewProjection.target = 1;
	ViewProjection.setAsSystemValue(NodeMaterialSystemValues.ViewProjection);

	// VertexOutputBlock
	const VertexOutput = new VertexOutputBlock('VertexOutput');
	VertexOutput.visibleInInspector = false;
	VertexOutput.visibleOnFrame = false;
	VertexOutput.target = 1;

	// Connections
	position.output.connectTo(WorldPos.vector);
	World.output.connectTo(WorldPos.transform);
	WorldPos.output.connectTo(WorldPosViewProjectionTransform.vector);
	ViewProjection.output.connectTo(WorldPosViewProjectionTransform.transform);
	WorldPosViewProjectionTransform.output.connectTo(VertexOutput.vector);
	WorldPos.output.connectTo(PBRMetallicRoughness.worldPosition);
	normal.output.connectTo(Worldnormal.vector);
	World.output.connectTo(Worldnormal.transform);
	Worldnormal.output.connectTo(PBRMetallicRoughness.worldNormal);
	view.output.connectTo(PBRMetallicRoughness.view);
	cameraPosition.output.connectTo(PBRMetallicRoughness.cameraPosition);
	Float1.output.connectTo(PBRMetallicRoughness.metallic);
	Float2.output.connectTo(PBRMetallicRoughness.roughness);
	position.output.connectTo(reflectionBlock.position);
	World.output.connectTo(reflectionBlock.world);
	Color1.output.connectTo(reflectionBlock.color);
	reflectionBlock.reflection.connectTo(PBRMetallicRoughness.reflection);
	Float3.output.connectTo(sheenBlock.intensity);
	Color1.output.connectTo(sheenBlock.color);
	Float4.output.connectTo(sheenBlock.roughness);
	sheenBlock.sheen.connectTo(PBRMetallicRoughness.sheen);
	PBRMetallicRoughness.lighting.connectTo(Lerp.left);
	Worldnormal.output.connectTo(Fresnel.worldNormal);
	WorldPos.output.connectTo(Viewdirection.worldPosition);
	cameraPosition.output.connectTo(Viewdirection.cameraPosition);
	Viewdirection.output.connectTo(Fresnel.viewDirection);
	bias.output.connectTo(Fresnel.bias);
	power.output.connectTo(Fresnel.power);
	Fresnel.fresnel.connectTo(Remap.input);
	edge.output.connectTo(Remap.sourceMin);
	falloff.output.connectTo(Remap.sourceMax);
	Remap.output.connectTo(Gradient.gradient);
	Gradient.output.connectTo(Lerp.right);
	Color.output.connectTo(Lerp.gradient);
	Lerp.output.connectTo(Scale.input);
	Float.output.connectTo(Scale.factor);
	Scale.output.connectTo(FragmentOutput.rgb);

	// Output nodes
	nodeMaterial.addOutputNode(VertexOutput);
	nodeMaterial.addOutputNode(FragmentOutput);
	nodeMaterial.build();

	return nodeMaterial;
}
