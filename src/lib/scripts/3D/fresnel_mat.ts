import {
	Color3,
	FragmentOutputBlock,
	GradientBlockColorStep,
	InputBlock,
	TransformBlock,
	NodeMaterial,
	VertexOutputBlock,
	NodeMaterialSystemValues,
	GradientBlock,
	Vector2,
	RemapBlock,
	AnimatedInputBlockTypes,
	FresnelBlock,
	ViewDirectionBlock
} from '@babylonjs/core';
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

	// FresnelBlock
	const Fresnel = new FresnelBlock('Fresnel');
	Fresnel.visibleInInspector = false;
	Fresnel.visibleOnFrame = false;
	Fresnel.target = 4;

	// ViewDirectionBlock
	const Viewdirection = new ViewDirectionBlock('View direction');
	Viewdirection.visibleInInspector = false;
	Viewdirection.visibleOnFrame = false;
	Viewdirection.target = 4;

	// InputBlock
	const cameraPosition = new InputBlock('cameraPosition');
	cameraPosition.visibleInInspector = false;
	cameraPosition.visibleOnFrame = false;
	cameraPosition.target = 1;
	cameraPosition.setAsSystemValue(NodeMaterialSystemValues.CameraPosition);

	// InputBlock
	const bias = new InputBlock('bias');
	bias.visibleInInspector = true;
	bias.visibleOnFrame = false;
	bias.target = 1;
	bias.value = 0.5;
	bias.min = 0;
	bias.max = 1;
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
	edge.value = 0.6;
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
	// Gradient.colorSteps.push(
	// 	new GradientBlockColorStep(0.09, new Color3(0.9058823529411765, 0.9921568627450981, 1))
	// );
	// Gradient.colorSteps.push(
	// 	new GradientBlockColorStep(
	// 		0.18,
	// 		new Color3(0.6509803921568628, 0.8823529411764706, 0.9529411764705882)
	// 	)
	// );
	// Gradient.colorSteps.push(
	// 	new GradientBlockColorStep(
	// 		0.38,
	// 		new Color3(0.36470588235294116, 0.6588235294117647, 0.8117647058823529)
	// 	)
	// );
	// Gradient.colorSteps.push(
	// 	new GradientBlockColorStep(
	// 		0.76,
	// 		new Color3(0.07450980392156863, 0.12549019607843137, 0.20784313725490197)
	// 	)
	// );
	// Gradient.colorSteps.push(
	// 	new GradientBlockColorStep(
	// 		1,
	// 		new Color3(0.047058823529411764, 0.054901960784313725, 0.0784313725490196)
	// 	)
	// );
	Gradient.colorSteps.push(new GradientBlockColorStep(0, new Color3(1, 1, 1)));
	Gradient.colorSteps.push(new GradientBlockColorStep(0.05, new Color3(0.9058823529411765, 0.9921568627450981, 1)));
	Gradient.colorSteps.push(new GradientBlockColorStep(0.18, new Color3(0.5882352941176471, 0.8666666666666667, 0.9529411764705882)));
	Gradient.colorSteps.push(new GradientBlockColorStep(0.38, new Color3(0.37254901960784315, 0.6862745098039216, 0.8862745098039215)));
	Gradient.colorSteps.push(new GradientBlockColorStep(0.76, new Color3(0.054901960784313725, 0.10196078431372549, 0.1803921568627451)));
	Gradient.colorSteps.push(new GradientBlockColorStep(1, new Color3(0.047058823529411764, 0.054901960784313725, 0.0784313725490196)));

	// FragmentOutputBlock
	const FragmentOutput = new FragmentOutputBlock('FragmentOutput');
	FragmentOutput.visibleInInspector = false;
	FragmentOutput.visibleOnFrame = false;
	FragmentOutput.target = 2;
	FragmentOutput.convertToGammaSpace = false;
	FragmentOutput.convertToLinearSpace = false;
	FragmentOutput.useLogarithmicDepth = false;

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
	normal.output.connectTo(Worldnormal.vector);
	World.output.connectTo(Worldnormal.transform);
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
	Gradient.output.connectTo(FragmentOutput.rgb);

	// Output nodes
	nodeMaterial.addOutputNode(VertexOutput);
	nodeMaterial.addOutputNode(FragmentOutput);
	nodeMaterial.build();

	return nodeMaterial;
}
