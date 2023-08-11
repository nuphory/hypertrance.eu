<script lang="ts" defer="true">
	import { browser } from '$app/environment';
	import ThreeD from '$lib/scripts/3D/3D';
	import { onMount } from 'svelte';
	import first_frame from '$lib/assets/img/samplepack/first_frame.webp';
	let canvas: HTMLCanvasElement;
	let first_frame_url: string | null = first_frame;
	onMount(() => {
		if (browser) {
			const ߜ = new ThreeD(canvas);
			ߜ.on_loaded = () => {
				first_frame_url = null;
			};
		}
	});
</script>

<canvas
	style="--first-frame-url:{first_frame_url}"
	class="bg-[url(var(--first-frame-url))] w-full h-full absolute left-0 top-0"
	bind:this={canvas}
/>
