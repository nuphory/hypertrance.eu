<script lang="ts">
	import THREED from '../lib/components/landing/THREED.svelte';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { db } from '$lib/scripts/music/db';
	import { Euterpe, EuterpeBuilder } from '@euterpe.js/euterpe';
	import { onMount } from 'svelte';
	import Sample from '../lib/components/landing/Sample.svelte';
	import Volume from '../lib/components/landing/Volume.svelte';
	import Stats from '../lib/components/landing/Stats.svelte';
	import Hero from '../lib/components/landing/Hero.svelte';
	export let data;

	//temp description
	db.collections.forEach((col) => {
		col.metadata[0] = `This is the placeholder text for the bass. It is not very long and it goes on for about two or three lines. Yes this is a text, and it will be used as an amazing text. text.`;
	});

	db.songs.forEach((song) => {
		song.url = new URL(`${$page.url.origin}/${song.url.pathname}`);
	});

	let player: Euterpe;
	let is_playing: boolean;
	let playing_song_id: number;
	const collections = db.collections.filter((c) => c.name != 'demos');
	const demos = db.collections.find((c) => c.name == 'demos')!;
	const demos_songs = demos.songs;
	onMount(() => {
		if (browser) {
			const audio = document.createElement('audio');
			db.songs.forEach((s) => (s.url = new URL(s.url.href.replace('.ogg', '.mp3'))));
			// if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
			// }
			player = new EuterpeBuilder(audio, db).build();
			document.body.appendChild(audio);

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

<main id="landing-page" class="font-michroma text-primary bg-primary">
	<Volume {player} />
	<section id="about" class="w-full h-[110vh] relative text-bg-primary">
		<THREED />
		<Hero {data} />
	</section>
	<section class="my-4 px-24">
		<div class="grid grid-cols-1 gap-8 w-full">
			<h2 class="text-5xl before:[content:''] text-center text-[var(--color-content-emphasis)]">
				EXPERIENCE THE HyPE OR SMT
			</h2>
			<Stats />
			<p class="my-4 indent-8 text-justify">
				This would be another good spot to describe the product more, probably explain what it even
				is and sound hype througout the whole thing. This could be a multi-line long description,
				although not sure about that since we don't have a single serif font in our library yet. We
				will cross that bridge once we get there, for now we don' even know if this paragraph will
				be here. Aight not sure what more to say so let's end it here c:
			</p>
			<div>
				<h3 class="text-4xl mt-8 text-center text-[var(--color-content-emphasis)]">DEMOS</h3>
				{#each demos.songs as song, i}
					<Sample {is_playing} {player} {playing_song_id} song={song.get(db)} />
				{/each}
			</div>
		</div>
	</section>
	<section class="mt-24 grid grid-cols-1 grid-rows-4 bg-primary">
		{#each collections as collection, i}
			<div
				class="w-full h-full p-12 py-6 grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-6 relative"
			>
				{#if i % 2 == 0}
					<div class="w-full h-full bg-text-primary" />
				{/if}
				<div class="w-full h-full bg-primary-island p-6">
					<h2
						class="bg-text-primary block text-5xl text-bg-primary -mx-6 -ml-8 pl-14 mt-3 py-1 font-suissnord"
					>
						{collection.name}
					</h2>
					<p class="mt-6 py-4 mx-8 text-justify">
						{collection.metadata[0]}
					</p>
					<div class="mt-6 grid grid-cols-1 gap-2">
						{#each collection.songs.slice(0, 4) as song}
							<Sample {is_playing} {player} {playing_song_id} song={song.get(db)} />
						{/each}
					</div>
				</div>
				{#if i % 2 != 0}
					<div class="w-full h-full bg-text-primary" />
				{/if}
			</div>
		{/each}
	</section>
</main>

<style lang="scss">
	:global(html) {
		font-size: clamp(0.5rem, calc(0.6rem + 0.3vw), 2rem);
	}
	section:not(:first-of-type) {
		@apply mx-auto lg:max-w-[1920px];
	}

	:global(:root) {
		--clip-time-path: polygon(0 0, 0 0, 0 100%, 0 100%);

		--color-content-emphasis: #fff;
		--color-content-base: #cae1ee;
		--color-content-inverse: #000;

		--color-bg-emphasis: #19336f;
		--color-bg-base: #12131a;
		--color-bg-inverse: #cae1ee;
		--color-bg-side: #061327;
		--color-bg-island: #272a3c;
	}
</style>
