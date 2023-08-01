<script lang="ts">
	import { onMount } from 'svelte';
	import type { Song } from '@euterpe.js/music-library';
	import { Icon, PauseCircle, Play, PlayCircle } from 'svelte-hero-icons';
	import type { Euterpe } from '@euterpe.js/euterpe';

	export let song: Song;
	export let is_playing: boolean = false;
	export let player: Euterpe;
	export let playing_song_id: number;

	let am_i_playing = false;

	let canvas: SVGSVGElement;
	let path_d = song.metadata[0] as string;
	//removes the whole <path ..." ...> from metadata
	path_d = path_d.slice(36, path_d.lastIndexOf('"'));

	$: playing_song_id == song.id ? (am_i_playing = true) : (am_i_playing = false);

	async function play() {
		player.try_specific_song_async(song.id!).then(
			() => {
				am_i_playing = true;
			},
			(e) => alert('failed to play song' + e)
		);
	}
	function pause() {
		player.pause();
	}
</script>

<div
	class="{$$restProps.class} bg-bg_inverse text-content_inverse flex justify-between items-center h-12 p-2"
>
	<span>
		<button on:click={is_playing && am_i_playing ? pause : play}
			><Icon
				class="h-8 w-8 mr-2 inline hover:brightness-75 active:brightness-110"
				src={am_i_playing && is_playing ? PauseCircle : PlayCircle}
				solid
			/></button
		>
		<p class="inline">{song.name}</p>
	</span>
	<svg
		class="h-full w-1/2 l:w-36 fill-content_inverse"
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
