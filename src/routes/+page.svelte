<script lang="ts">
	import { onMount } from 'svelte';
	import ThreeD from '$lib/scripts/3D/3D';
	import Sample from './Sample.svelte';
	import { Euterpe, EuterpeBuilder } from '@euterpe.js/euterpe';
	import { db } from '$lib/scripts/music/db';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import '$lib/styles/promo/promo1.scss';
	import { browser } from '$app/environment';
	import Video from './Video.svelte';

	//temp description
	db.collections.forEach((col) => {
		col.metadata[0] = `The Eon Premium Collection includes a selection of high-quality hi-hats, powerful kicks,and crisp snares. When used in conjunction with the presets, creating a song start tofinish will take literal seconds. The Eon Premium Collection includes a selection of high-quality hi-hats, powerful kicks,and crisp snares. When used in conjunction with the presets, creating a song start tofinish will take literal seconds`;
	});

	db.songs.forEach((song) => {
		song.url = new URL(`${$page.url.origin}/${song.url.pathname}`);
	});
	let canvas: HTMLCanvasElement;
	let player: Euterpe;
	let is_playing: boolean;
	let playing_song_id: number;
	let hide_bg_img = true;

	let bg_video_sources = [
		{ breakpoint: 480, path: '/bg/bg_480p.webm' },
		{ breakpoint: 720, path: '/bg/bg_720p.webm' },
		{ breakpoint: 1080, path: '/bg/bg_1080p.webm' },
		{ breakpoint: 2560, path: '/bg/bg_2560p.webm' }
	];
	onMount(() => {
		if (browser) {
			const audio = document.createElement('audio');
			player = new EuterpeBuilder(audio, db).build();
			document.body.appendChild(audio);
			const ߜ = new ThreeD(canvas);
			ߜ.on_loaded = () => {
				hide_bg_img = true;
				hide_bg_img = hide_bg_img;
			};
			audio.addEventListener('pause', () => {
				is_playing = false;
			});

			audio.addEventListener('play', () => {
				is_playing = true;
			});
			player.on_time_tick((time) => {
				playing_song_id = player.current_song_id;
				if (player.is_playing) {
					const x = `${(time / player.current_song_duration) * 100}%`;
					const polygon = `polygon(0 0, ${x} 0, ${x} 100%, 0 100%)`;
					document.documentElement.style.setProperty('--clip-time-path', polygon);
				}
			});
		}
	});
</script>

<div id="wrapper">
	<main class="font-michroma text-content_base bg-bg_base">
		<section class="w-full h-screen">
			<div class=" z-10 absolute right-[15vw] bottom-[20vh] bg-bg_island p-12">
				<div class="font-suissnord flex flex-row justify-evenly space-x-6 text-content_emphasis">
					<!-- <span class="h-full align-baseline">
						<p class="text-8xl font-sans italic">[</p>
					</span> -->
					<span class="p-2 align-baseline h-full">
						<h1 class="text-4xl w-full">hypertrance <br /> samplepack</h1>
						<span class="flex justify-between w-full relative">
							<!-- <h2 class="text-l">by hypertrance</h2> -->
							<!-- <p class="text-5xl absolute right-0 -top-[1.5rem]">. . .</p> -->
						</span>
					</span>
					<!-- <span class="h-full align-baseline font-sans italic">
						<p class="text-8xl">]</p>
					</span> -->
				</div>
				<span class="font-sussnord text-xl flex justify-between mt-6 p-2">
					<button
						class="button-secondary p-4 m-2"
						on:click={() => goto('app/store/product/hypertrance-sample-pack-01')}>buy now</button
					>
					<button class="button-neutral p-4 m-2">learn more</button>
				</span>
			</div>
			<div
				class="w-full h-full absolute [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_50%,rgba(0,0,0,0)_100%)]"
			>
				<div class="w-full h-full flex justify-center items-center align-middle">
					<div class="w-5/6 h-5/6">
						<Video autoplay={true} loop={true} muted={true} src_set={bg_video_sources} />
					</div>
				</div>
				<img
					class="h-full absolute left-0 top-0"
					hidden={hide_bg_img}
					src="/assets/img/first_frame.webp"
					alt="3D loading alternative"
				/>
				<canvas class="w-full h-full absolute left-0 top-0" bind:this={canvas} />
			</div>
		</section>
		<section class="grid grid-cols-1 grid-rows-4 bg-bg_base">
			{#each db.collections as collection, i}
				<div class="w-full h-full p-12 py-6 grid grid-cols-2 grid-rows-1 gap-6 relative">
					{#if i % 2 == 0}
						<div class="w-full h-full bg-bg_side" />
					{/if}
					<div class="w-full h-full bg-bg_island p-6">
						<h3 class="mt-3 text-5xl text-content_emphasis font-suissnord">{collection.name}</h3>
						<p class="mt-6">
							{collection.metadata[0]}
						</p>
						<div class="mt-6 grid grid-cols-1 l:grid-cols-2">
							{#each collection.songs.slice(0, 3) as song}
								<Sample {is_playing} {player} {playing_song_id} song={song.get(db)} />
							{/each}
						</div>
					</div>
					{#if i % 2 != 0}
						<div class="w-full h-full bg-bg_side" />
					{/if}
				</div>
			{/each}
		</section>
	</main>
</div>
