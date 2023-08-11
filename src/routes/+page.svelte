<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import first_frame from '$lib/assets/img/promo/samplepack/first_frame.webp';
	import meta_cover from '$lib/assets/img/promo/samplepack/meta-cover.webp';
	import Hero from '$lib/components/pages/samplepack-promo/Hero.svelte';
	import Sample from '$lib/components/pages/samplepack-promo/Sample.svelte';
	import Stats from '$lib/components/pages/samplepack-promo/Stats.svelte';
	import Volume from '$lib/components/pages/samplepack-promo/Volume.svelte';
	import { make } from '$lib/scripts/music/db';
	import { createCart } from '$lib/utils/shopify/cart';
	import Video from '$src/lib/components/pages/samplepack-promo/Video.svelte';
	import { EuterpeBuilder, type Euterpe } from '@euterpe.js/euterpe';
	import { onMount } from 'svelte';
	import { ArrowUp, Icon } from 'svelte-hero-icons';

	export let data;

	let first_frame_url: string | null = first_frame;
	let THREED: any;
	let canvas_wrapper: HTMLElement;
	const db = make();
	const { product } = data;
	const selected_variant = product.variants.nodes[0];

	async function buyNow() {
		if (!product) throw Error('Product not found');
		const cart = await createCart(selected_variant.id, 1);
		if (!cart) throw Error('Cart creation failed');
		goto(cart.checkoutUrl);
	}

	let player: Euterpe;
	let is_playing: boolean;
	let playing_song_id: number;
	const collections = db.collections.filter((c) => c.name != 'demos');
	const demos = db.collections.find((c) => c.name == 'demos')!;
	onMount(async () => {
		if (browser) {
			THREED = (await import('$lib/components/pages/samplepack-promo/THREED.svelte')).default;

			const audio = document.createElement('audio');
			if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
				db.songs.forEach((s) => (s.url = new URL(s.url.href.replace('.ogg', '.mp3'))));
			}
			player = new EuterpeBuilder(document.createElement('audio'), db, {
				use_only_pathname_url: true
			}).build();

			console.log(player);
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
					// debugger;
					const x = `${(time / player.current_song_duration) * 100}%`;
					const polygon = `polygon(0 0, ${x} 0, ${x} 100%, 0 100%)`;
					// let style = window.getComputedStyle(document.body);
					// console.log(
					// 	`x: ${x}, polygon: ${polygon}\n--clip-time-path before: ${style.getPropertyValue(
					// 		'--clip-time-path'
					// 	)}`
					// );
					document.body.style.setProperty('--clip-time-path', polygon);
					const style = window.getComputedStyle(document.body);
					console.log(
						`x: ${x}\npolygon: ${polygon}\n--clip-time-path before: ${style.getPropertyValue(
							'--clip-time-path'
						)}`
					);
				}
			});
		}
	});

	function on_loaded() {
		canvas_wrapper.removeAttribute('style');
	}
</script>

<svelte:head>
	<title>HYPERTRANCE SAMPLEPACK</title>

	<meta name="title" content="HYPERTRANCE SAMPLEPACK" />
	<meta property="og:type" content="og:product" />
	<meta property="og:title" content="HYPERTRANCE SAMPLEPACK" />
	<meta property="og:url" content="https://v3.hypertrance.pages.dev" />
	<meta property="og:image" content={'https://v3.hypertrance.pages.dev' + meta_cover} />
	<meta
		property="og:description"
		content="Experience the world of hypertrance with this all-new samplepack developed by nuphory."
	/>
	<meta property="product:plural_title" content="HYPERTRANCE SAMPLEPACKS" />
	<meta property="product:price.amount" content="39.00" />
	<meta property="product:price.currency" content="EUR" />

	<meta property="twitter:card" content="product" />
	<meta property="twitter:site" content="@hypertranceRT" />
	<meta
		property="twitter:description"
		content="Experience the world of hypertrance with this all-new samplepack developed by nuphory."
	/>
	<meta property="twitter:image" content={'https://v3.hypertrance.pages.dev' + meta_cover} />
	<meta property="twitter:title" content="HYPERTRANCE SAMPLEPACK" />
	<meta property="twitter:label1" content="Price" />
	<meta property="twitter:data1" content="39.00EUR" />
	<meta property="twitter:label2" content="Tags" />
	<meta property="twitter:data2" content="trance, samplepack, hypertrance" />
</svelte:head>

<main id="landing-page" class="font-michroma text-primary bg-primary pb-16">
	<Volume {player} />
	<section
		id="landing"
		class="w-full h-[calc(100svh-10rem)] md:h-[calc(100svh-15rem)] relative text-bg-primary"
	>
		<div
			class="w-full h-full [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_70%,rgba(0,0,0,0)_100%)]"
		>
			<div class="h-full overflow-hidden">
				<Video autoplay={true} loop={true} muted={true} />
			</div>
			<div
				bind:this={canvas_wrapper}
				style="--first-frame-url:url({first_frame_url})"
				class="[background-image:var(--first-frame-url)] bg-cover bg-no-repeat bg-center w-full h-full absolute left-0 top-0"
			>
				<svelte:component this={THREED} {on_loaded} />
			</div>
		</div>
		<Hero {data} />
	</section>
	<section id="about" class="my-4 pt-8">
		<div class="px-12 grid grid-cols-1 w-full">
			<h2 class="text-5xl before:[content:''] text-center text-[var(--color-content-emphasis)]">
				DIVE IN. TAKE FLIGHT.
			</h2>
			<p class="my-4 indent-8 text-justify">
				Experience the world of hypertrance with this all-new samplepack developed by nuphory. From
				Virtual Self - styled leads to Alphazone / Y2K influenced hardtrance loops, the hypertrance
				samplepack delivers high quality samples and presets developed by producers, for producers.
				Tired of having to sift through outdated, unoptimized sample packs? Whether you're an
				advanced user or just starting out, the hypertrance samplepack provides mixed and matched
				neoy2k samples for maximum efficiency in the studio, saving you time and energy so that you
				can focus on what matters - nailing that sound. Our presets and samples require no
				additional paid software and are compatible with all DAWs, ensuring barrier-free access on
				every platform. Try our free sample pack demo today!
			</p>
			<Stats />
			<div>
				<h3 class="text-4xl mt-8 text-center text-[var(--color-content-emphasis)]">DEMOS</h3>
				<p class="my-8 mb-16 indent-8 text-center">
					Got demos you want to share with us? Join our Discord! <a
						href="https://discord.gg/hypertrance">https://discord.gg/hypertrance</a
					>
				</p>
				{#each demos.songs as song, i}
					<Sample {is_playing} {player} {playing_song_id} song={song.get(db)} />
				{/each}
			</div>
		</div>
	</section>
	<section class="mt-24 grid grid-cols-1 grid-rows-4 bg-primary">
		{#each collections as collection, i}
			<div class="w-full h-fit p-12 py-6 flex max-lg:flex-col  gap-6 relative">
				<div class="relative overflow-clip w-half {i % 2 ? '' : 'lg:order-last'}">
					<img
						class="absolute left-50 top-50 -translate-x-50 -translate-y-50 w-full"
						srcset="
							/promo/{collection.name.replace(' ', '_')}/{collection.name.replace(' ', '_')}_320p.webp 320w,
							/promo/{collection.name.replace(' ', '_')}/{collection.name.replace(' ', '_')}_500p.webp 500w,
							/promo/{collection.name.replace(' ', '_')}/{collection.name.replace(' ', '_')}_800p.webp 800w,
							/promo/{collection.name.replace(' ', '_')}/{collection.name.replace(' ', '_')}_1000p.webp 1000w,
							"
						sizes="(max-width: 400px) 320px, 500px, 800px, 1000px"
						src="/promo/{collection.name}/{collection.name}_500p.webp"
						alt="{collection.name} thumbnail"
					/>
				</div>
				<div class="bg-primary-island p-6 w-half">
					<h2
						class="bg-text-primary block text-5xl text-bg-primary -mx-6 -ml-8 pl-14 mt-3 py-1 font-suissnord"
					>
						{collection.name}
					</h2>
					<p class="mt-6 py-4 mx-8 text-justify">
						{@html collection.metadata[0]}
					</p>
					<div class="mt-6 grid grid-cols-1 gap-2">
						{#each collection.songs as song}
							<Sample {is_playing} {player} {playing_song_id} song={song.get(db)} />
						{/each}
					</div>
				</div>
				<!-- {#if i % 2 != 0}
					<div class="w-full h-full overflow-hidden relative">
						<img
							class="h-full w-full object-cover"
							srcset="
						/promo/{collection.name.replace(' ', '_')}/{collection.name.replace(' ', '_')}_320p.webp 320w,
						/promo/{collection.name.replace(' ', '_')}/{collection.name.replace(' ', '_')}_500p.webp 500w,
						/promo/{collection.name.replace(' ', '_')}/{collection.name.replace(' ', '_')}_800p.webp 800w,
						/promo/{collection.name.replace(' ', '_')}/{collection.name.replace(' ', '_')}_1000p.webp 1000w,
						"
							sizes="(max-width: 400px) 320px, 500px, 800px, 1000px"
							src="/promo/{collection.name}/{collection.name}_500p.webp"
							alt="{collection.name} thumbnail"
						/>
					</div>
				{/if} -->
			</div>
		{/each}
	</section>
	<section class="mt-12">
		<div class="w-fit h-fit mx-auto text-center">
			<h3 class="text-5xl mb-12">Try it out</h3>
			<p>Not convinced? Download our demo pack for free!</p>
			<a
				data-sveltekit-reload
				class="inline w-fit h-fit px-4 py-4 mr-8"
				href="/store/product/hypertrance-samplepack">Free Demo</a
			>
			<button class="hyper-button button-primary whitespace-nowrap" on:click={buyNow}>
				<span>buy now</span>
			</button>
		</div>
		<div
			class="md:float-right bg-text-primary mx-auto mt-12 md:mr-24 md:-mt-16 w-16 h-16 rounded-full p-2 transition-all hover:scale-90 active:scale-105 active:brightness-105
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

<style lang="scss">
	:global(html) {
		font-size: clamp(0.5rem, calc(0.6rem + 0.3vw), 2rem);
	}
	section:not(:first-of-type) {
		@apply mx-auto lg:max-w-[1920px] md:px-16;
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
