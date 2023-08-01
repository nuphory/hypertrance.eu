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
		col.metadata[0] = `This is the placeholder text for the bass. It is not very long and it goes on for about two or three lines. Yes this is a text, and it will be used as an amazing text. text.`;
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
		<section class="w-full h-[110vh] relative text-content_inverse">
			<div
				class=" z-10 absolute right-[15vw] bottom-[30vh] [transform:skewX(25deg)] bg-bg_side pl-4"
			>
				<div class="bg-bg_inverse [&>*]:[transform:skewX(-25deg)] py-4 px-20">
					<div class="font-suissnord">
						<h1 class="block text-4xl w-full -mb-2">HyPERTRANCE</h1>
						<h1 class="pl-24 block text-4xl">SAMPLEPACK</h1>
					</div>
					<span class="font-sussnord text-2xl flex justify-between">
						<div
							class="bg-bg_base [&>*]:[transform:skewX(-25deg)] [transform:skewX(25deg)] text-content_emphasis py-1 px-8 m-2"
						>
							<a class="before:content-['>_'] block" href="store/product/hypertrance-sample-pack-01"
								>buy now</a
							>
						</div>
						<a href="#about" class="block button-neutral py-1 px-2 m-2">learn more</a>
					</span>
				</div>
			</div>
			<div
				class="w-full h-full [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)]"
			>
				<div class="h-full overflow-hidden">
					<Video autoplay={true} loop={true} muted={true} src_set={bg_video_sources} />
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
		<section id="about" class="grid grid-cols-1 grid-rows-4 bg-bg_base">
			{#each db.collections as collection, i}
				<div
					class="w-full h-full p-12 py-6 grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-6 relative"
				>
					{#if i % 2 == 0}
						<div class="w-full h-full bg-bg_inverse" />
					{/if}
					<div class="w-full h-full bg-bg_island p-6">
						<h3
							class="bg-bg_inverse block text-5xl text-content_inverse -mx-6 -ml-8 pl-14 mt-3 py-1 font-suissnord before:content-['>_']"
						>
							{collection.name}
						</h3>
						<p class="mt-6 py-4 mx-8">
							{collection.metadata[0]}
						</p>
						<div class="mt-6 grid grid-cols-1 gap-2">
							{#each collection.songs.slice(0, 4) as song}
								<Sample {is_playing} {player} {playing_song_id} song={song.get(db)} />
							{/each}
						</div>
					</div>
					{#if i % 2 != 0}
						<div class="w-full h-full bg-bg_inverse" />
					{/if}
				</div>
			{/each}
		</section>
	</main>
</div>
