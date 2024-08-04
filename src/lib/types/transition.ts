import type {
	BlurParams,
	FadeParams,
	FlyParams,
	SlideParams,
	ScaleParams,
	DrawParams,
	CrossfadeParams
} from 'svelte/transition';

export type TransitionParams = Partial<
	BlurParams & FadeParams & FlyParams & SlideParams & ScaleParams & DrawParams & CrossfadeParams
>;
