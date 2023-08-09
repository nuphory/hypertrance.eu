<script lang="ts" defer="true">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import ThreeD from '$lib/scripts/3D/3D';
	import Video from './Video.svelte';

	let hide_bg_img = true;
	let canvas: HTMLCanvasElement;

        import first_frame_srcset from "$lib/assets/img/samplepack/first_frame.webp?format=webp&w=425;576;640;820;1024;1280;1920;2560&as=srcset";

	onMount(() => {
		if (browser) {
			const ߜ = new ThreeD(canvas);
			ߜ.on_loaded = () => {
				hide_bg_img = true;
				hide_bg_img = hide_bg_img;
			};
		}
	});
	let bg_video_sources = [
		{ breakpoint: 480, path: '/bg/bg_480p.webm' },
		{ breakpoint: 720, path: '/bg/bg_720p.webm' },
		{ breakpoint: 1080, path: '/bg/bg_1080p.webm' },
		{ breakpoint: 2560, path: '/bg/bg_2560p.webm' }
	];
</script>

<div
	class="w-full h-full [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)]"
>
	<div class="h-full overflow-hidden">
		<Video autoplay={true} loop={true} muted={true} src_set={bg_video_sources} />
	</div>
	<img
		class="h-full absolute left-0 top-0"
		hidden={hide_bg_img}
		srcset={first_frame_srcset}
		alt="3D loading alternative"
	/>
	<canvas id="iksdffgvbld" class="w-full h-full absolute left-0 top-0" bind:this={canvas} />
</div>
