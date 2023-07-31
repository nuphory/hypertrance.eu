<script lang="ts">
	import { onMount } from 'svelte';
	import { createScene } from './scene';

	let canvas;

	onMount(() => {
		createScene(canvas);
	});
</script>

<canvas bind:this={canvas} />
