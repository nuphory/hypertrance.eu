<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let muted: boolean;
	export let autoplay: boolean;
	export let loop: boolean;

	const src_set = [
		{ breakpoint: 480, path: '/bg/bg_480p' },
		{ breakpoint: 720, path: '/bg/bg_720p' },
		{ breakpoint: 1080, path: '/bg/bg_1080p' },
		{ breakpoint: 1440, path: '/bg/bg_1440p' }
	];

	let video_element: HTMLVideoElement;
	onMount(() => {
		setTimeout(() => {
			if (browser) {
				const height = video_element.clientHeight;
				src_set.sort((a, b) => {
					if (a.breakpoint == b.breakpoint) return 0;
					if (a.breakpoint > b.breakpoint) return 1;
					else return -1;
				});
				let i = 0;
				while (true) {
					if (src_set[i].breakpoint > height) break;
					// console.log(`${i}: ${src_set[i].breakpoint} < ${height}`);
					if (!src_set[++i]) break;
				}
				const sources = video_element.querySelectorAll(`source`);
				const src = document.createElement('source');
				src.src = src_set[i].path;
				src.type = 'video/webm';
				video_element.appendChild(src);
				sources.forEach((s) => s.remove());
			}
		}, 100);
	});
</script>

<video
	class="w-full h-full object-fill"
	bind:this={video_element}
	controls={null}
	preload="metadata"
	autoplay={autoplay || null}
	muted={muted || null}
	loop={loop || null}
>
	<source src={src_set[0].path + '.webm'} type="video/webm" />
	<source src={src_set[0].path + '.mp4'} type="video/mp4" />
</video>
