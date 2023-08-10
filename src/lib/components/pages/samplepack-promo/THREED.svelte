<script lang="ts" defer="true">
	import { browser } from '$app/environment';
	import ThreeD from '$lib/scripts/3D/3D';
	import { onMount } from 'svelte';
	import Video from './Video.svelte';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		if (browser) {
			const ߜ = new ThreeD(canvas);
			ߜ.on_loaded = () => {
				document.querySelector('threed-loading');
			};
		}
	});
</script>

<canvas id="iksdffgvbld" class="w-full h-full absolute left-0 top-0" bind:this={canvas} />
