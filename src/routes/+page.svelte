<script lang="ts">
	import { Icon, ArrowUp } from 'svelte-hero-icons';
	import THREED from '$lib/components/landing/THREED.svelte';
	import { browser } from '$app/environment';
	import { db } from '$lib/scripts/music/db';
	import { Euterpe, EuterpeBuilder } from '@euterpe.js/euterpe';
	import { onMount } from 'svelte';
	import Sample from '$lib/components/landing/Sample.svelte';
	import Volume from '$lib/components/landing/Volume.svelte';
	import Stats from '$lib/components/landing/Stats.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import { createCart } from '$src/lib/utils/shopify';
	import { goto } from '$app/navigation';
	export let data;
	const { product } = data;
	const selected_variant = product.variants.nodes[0];
	async function direct_buy() {
		if (!product) throw Error('Product not found');
		const cart = await createCart(selected_variant.id, 1);
		if (!cart) throw Error('Cart creation failed');
		goto(cart.checkoutUrl);
	}
	//temp description
	db.collections.forEach((col) => {
		col.metadata[0] = `This is the placeholder text for the bass. It is not very long and it goes on for about two or three lines. Yes this is a text, and it will be used as an amazing text. text.`;
	});

	let player: Euterpe;
	let is_playing: boolean;
	let playing_song_id: number;
	const collections = db.collections.filter((c) => c.name != 'demos');
	const demos = db.collections.find((c) => c.name == 'demos')!;
	onMount(() => {
		if (browser) {
			const audio = document.createElement('audio');
			if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
				db.songs.forEach((s) => (s.url = new URL(s.url.href.replace('.ogg', '.mp3'))));
			}
			player = new EuterpeBuilder(audio, db, { use_only_pathname_url: true }).build();
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
	<section id="landing" class="w-full h-[110vh] relative text-bg-primary">
		<THREED />
		<Hero {data} />
	</section>
	<section id="about" class="my-4 px-24">
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
	<section class="mt-12">
		<div class="w-fit h-fit mx-auto text-center">
			<h3 class="text-5xl mb-12">Try it out</h3>
			<a class="inline w-fit h-fit px-4 py-4 mr-8" href="https://mega.nz">demo samplepack.zip</a>
			<button
				class="inline px-4 py-4 ml-8 bg-[var(--color-bg-inverse)] text-[var(--color-content-inverse)]"
				on:click={direct_buy}
			>
				<span class="inline-block text-2xl">buy now</span>
			</button>
		</div>
		<div
			class="float-right mr-24 bg-text-primary -mt-16 w-16 h-16 rounded-full p-2 transition-all hover:scale-90 active:scale-105 active:brightness-105
			shadow-[var(--color-bg-side)] shadow-[0_0_3rem_5px] hover:brightness-75"
		>
			<a href="#landing">
				<Icon
					class="w-12 h-12 stroke-[var(--color-bg-side)] fill-[var(--color-bg-side)] "
					src={ArrowUp}
				/>
			</a>
		</div>
	</section>
</main>
<footer
	class="mt-24 w-full h-16 bg-[var(--color-bg-inverse)] text-[var(--color-content-inverse)] text-center pt-4"
>
	<p class="inline mx-12">© Hypertrance e.U.</p>
	<a class="inline mx-12 text-[var(--color-content-inverse)]" href="store">Store</a>
</footer>

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
