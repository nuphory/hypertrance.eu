<script lang="ts">
	import { onMount } from 'svelte';
	import ThreeD from './scripts/3D/3D';
	import Sample from './components/sample.svelte';
	import { EuterpeBuilder } from '@euterpe.js/euterpe';
	import { db } from './scripts/music/db';
	//temp description
	db.collections.forEach((col) => {
		col.metadata[0] = `The Eon Premium Collection includes a selection of high-quality hi-hats, powerful kicks,and crisp snares. When used in conjunction with the presets, creating a song start tofinish will take literal seconds. The Eon Premium Collection includes a selection of high-quality hi-hats, powerful kicks,and crisp snares. When used in conjunction with the presets, creating a song start tofinish will take literal seconds`;
	});
	let canvas;
	const audio = document.createElement('audio');
	const player = new EuterpeBuilder(audio, db).build();
	let is_playing;
	let playing_song_id;

	onMount(() => {
		document.body.appendChild(audio);
		let ߜ = new ThreeD(canvas);
	});

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
</script>

<div id="wrapper">
	<main class="font-sans text-content_base">
		<section class="w-full h-screen">
			<div class="absolute right-[15vw] bottom-[20vh] bg-bg_island p-12">
				<div class="font-neuropol flex flex-row justify-evenly space-x-6 text-content_emphasis">
					<span class="h-full align-baseline">
						<p class="text-8xl font-sans italic">[</p>
					</span>
					<span class="p-2 align-baseline h-full">
						<h1 class="text-4xl w-full">hypertrance <br /> soundset 2</h1>
						<span class="flex justify-between w-full relative">
							<!-- <h2 class="text-l">by hypertrance</h2> -->
							<p class="text-5xl absolute right-0 -top-[1.5rem]">. . .</p>
						</span>
					</span>
					<span class="h-full align-baseline font-sans italic">
						<p class="text-8xl">]</p>
					</span>
				</div>
				<span class="font-conthrax text-xl flex justify-between mt-6 p-2">
					<button class="bg-bg_inverse p-4 m-2 text-content_emphasis">::buy now</button>
					<button class="border-bg_inverse border-2 p-4 m-2 text-content_emphasis"
						>::learn more</button
					>
				</span>
			</div>
			<canvas class="w-full h-full bg-bg_base block fixed -z-10" bind:this={canvas} />
		</section>
		<section class="grid grid-cols-1 grid-rows-4 bg-bg_base">
			{#each db.collections as collection, i}
				<div class="w-full h-full p-12 py-6 grid grid-cols-2 grid-rows-1 gap-6 relative">
					{#if i % 2 == 0}
						<div class="w-full h-full bg-bg_side" />
					{/if}
					<div class="w-full h-full bg-bg_island p-6">
						<h3 class="mt-3 text-3xl text-content_emphasis font-conthrax">::{collection.name}</h3>
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
