<script lang="ts">
	import { onMount } from 'svelte';
	import type { Song } from '@euterpe.js/music-library';
	import type { Euterpe } from '@euterpe.js/euterpe';
	import { Icon, PauseCircle, PlayCircle } from 'svelte-hero-icons';

	export let song: Song;
	export let is_playing = false;
	export let player: Euterpe;
	export let playing_song_id: number;

	let am_i_playing = false;
	let is_seeking = false;
	let canvas: SVGSVGElement;
	let path_d = song.metadata[0] as string;

	$: playing_song_id == song.id ? (am_i_playing = true) : (am_i_playing = false);
	//onClick => change to current song && seek to time
	async function seek(event: MouseEvent) {
		if (!am_i_playing) await play();

		// @ts-ignore
		const rect = event.target.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const res_x = convert_range(x, [0, rect.width], [0, canvas.viewBox.baseVal.width]);
		const seek_percent = res_x / canvas.viewBox.baseVal.width;
		console.log(
			`rect: ${rect}, x: ${x}, res_x: ${res_x}, seek%: ${seek_percent}\nduration: ${
				song.duration
			}, seektime: ${seek_percent * song.duration!}`
		);
		player.try_seek(seek_percent * song.duration!).catch(async (r) => {
			await play();
			player.try_seek(seek_percent * song.duration!).catch((e) => console.error(e));
		});
	}
	async function play() {
		try {
			await player.try_specific_song(song.id!);
		} catch (e) {
			console.error('failed to play song', e);
		}
	}
	function pause() {
		player.pause();
	}
	function convert_range(value: number, r1: [number, number], r2: [number, number]) {
		return ((value - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0];
	}
</script>

<div
	class="{$$restProps.class} bg-text-primary text-bg-primary flex justify-between flex-row flex-nowrap items-center h-12 p-2"
>
	<span class="whitespace-nowrap grid grid-cols-[2rem,1fr] grid-flow-row grid-rows-1 gap-2 mr-4">
		<button on:click={is_playing && am_i_playing ? pause : play}
			><Icon
				class="h-8 w-8 mr-2 hover:brightness-75 active:brightness-110 col-span-1"
				src={am_i_playing && is_playing ? PauseCircle : PlayCircle}
				solid
			/></button
		>
		<p class="truncate whitespace-nowrap w-full h-full text-center m-0 col-span-1 leading-10">
			{song.name}
		</p>
	</span>
	<svg
		on:click={(e) => seek(e)}
		on:keypress={() => play()}
		class="h-full w-2/5 min-w-[8rem] l:w-36 fill-primary shrink-0"
		bind:this={canvas}
		viewBox="0 0 500 500"
		preserveAspectRatio="none"
	>
		<path d={path_d} width="100%" height="100%" />
		<path d={path_d} class={am_i_playing ? 'clipping' : 'invisible'} width="100%" height="100%" />
	</svg>
</div>

<style>
	.clipping {
		@apply fill-[rgba(150,150,150,.4)];
		clip-path: var(--clip-time-path);
	}
</style>
