<script lang="ts" defer="true">
	import { browser } from '$app/environment';
	import ThreeD from '../(assets)/3D/3D';
	import { onMount } from 'svelte';

	export let on_loaded: () => {};
	let canvas: HTMLCanvasElement;
	onMount(() => {
		if (browser) {
			const ߜ = new ThreeD(canvas, undefined, on_loaded);
		}
	});
</script>

<canvas class="w-full h-full" bind:this={canvas} />
