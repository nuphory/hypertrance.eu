<script lang="ts">
	import type { TransitionParams } from '$lib/types/transition.js';
	import { onMount, type Snippet } from 'svelte';
	import { expoOut } from 'svelte/easing';
	import { fly, type TransitionConfig } from 'svelte/transition';

	const transitionDuration = 500;

	let {
		url,
		children,
		inFn = fly,
		inParams = {
			x: -50,
			duration: transitionDuration,
			easing: expoOut,
		},
		outFn = fly,
		outParams = {
			x: 50,
			duration: transitionDuration,
			easing: expoOut,
		},
	}: {
		url: string;
		children: Snippet;
		inFn?: (node: Element, params: object) => TransitionConfig;
		inParams?: TransitionParams;
		outFn?: (node: Element, params: object) => TransitionConfig;
		outParams?: TransitionParams;
	} = $props();

	const introstart = ({ target }: CustomEvent<null>) => {
		if (!inParams.delay) return;

		if (!target) return;
		const el = target as HTMLElement;

		el.style.display = 'none';
		setTimeout(() => {
			el.style.display = '';
		}, inParams.delay);
	};
	const outrostart = ({ target }: CustomEvent<null>) => {
		if (!target) return;

		const el = target as HTMLElement;

		el.style.position = 'absolute';
	};
</script>

<div class="relative">
	{#key url}
		<div
			class="absolute w-full"
			in:inFn="{inParams}"
			out:outFn="{outParams}"
			onintrostart="{introstart}"
			onoutrostart="{outrostart}">
			{@render children()}
		</div>
	{/key}
</div>
