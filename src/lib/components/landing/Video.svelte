<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let src_set: { breakpoint: number; path: string }[];
	export let muted: boolean;
	export let autoplay: boolean;
	export let loop: boolean;
	let video_element: HTMLVideoElement;
	let src = '';
	onMount(() => {
		if (browser) {
			const width = video_element.clientWidth;
			console.log(width);
			src_set.sort((a, b) => {
				if (a.breakpoint == b.breakpoint) return 0;
				if (a.breakpoint > b.breakpoint) return 1;
				else return -1;
			});
			let i = 0;
			while (true) {
				if (src_set[i].breakpoint > width) break;
				i++;
			}
			src = src_set[0].path;
		}
	});
</script>

<video
	class="min-w-full min-h-full max-w-none max-h-none"
	bind:this={video_element}
	controls="null"
	preload="metadata"
	autoplay={autoplay || null}
	muted={muted || null}
	loop={loop || null}
>
	<source src={src_set[2].path} type="video/webm" />
</video>
