<script lang="ts">
	import { onMount } from 'svelte';
	import ThreeD from './scripts/3D';

	let canvas;
	onMount(() => {
		let ߜ = new ThreeD(canvas);
	});
</script>

<canvas class="w-screen h-screen" bind:this={canvas} />

<style>
</style>
