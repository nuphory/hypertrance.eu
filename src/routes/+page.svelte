<script lang="ts">
	// Imports
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	// Assets
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	import summaryImgSrc from '$lib/assets/img/hypertrance-2-cover.jpg?jpg&w=800';
	import { description, name, tagline, url } from '$lib/identity';
	import Hypertrance2 from '$lib/pages/hypertrance-2/Hypertrance2.svelte';
	import About from '$lib/components/About.svelte';

	onMount(async () => {
		if (!browser) return;

		setTimeout(async () => {
			document.querySelectorAll('iframe').forEach((el) => {
				el.setAttribute('src', `${el.dataset.src}`);
				setTimeout(async () => {
					el.classList.remove('opacity-0');
				}, 200);
			});
			document.querySelectorAll('video').forEach((el: HTMLVideoElement) => {
				el.play();
				setTimeout(async () => {
					el.classList.remove('opacity-0');
				}, 200);
			});
		}, 0);

		document.body.addEventListener('copy', () => {
			document.querySelectorAll("[aria-hidden='true']").forEach((el) => {
				el.classList.add('hidden');
				setTimeout(() => {
					el.classList.remove('hidden');
				});
			});
		});
	});
</script>

<svelte:head>
	<title>{name}</title>
	<meta name="title" content={name} />

	<meta name="description" content={description} />

	<link rel="canonical" href={url} />

	<meta name="robots" content="index, follow" />

	<meta property="og:title" content="{name} {tagline ? `— ${tagline}` : ''}" />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{url}{summaryImgSrc}" />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@{name}" />
	<meta name="twitter:creator" content="@{name}" />
	<meta name="twitter:title" content="{name} — {tagline}" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{url}{summaryImgSrc}" />
</svelte:head>

<main>
	<Hypertrance2 />
	<About />
	<section
		class="sticky bottom-0 md:h-0 md:!p-0 md:m-0 md:translate-y-full overflow-clip font-comsat-navy"
	>
		<ul class="container flex justify-evenly items-start gap-8 list-none">
			<li class="flex-1 order-2">
				<button
					class="w-full backdrop-blur shadow-lg button-primary"
					on:click={() => window.open('http://hypertrance.bandcamp.com', '_blank')}
					on:auxclick={() => window.open('http://hypertrance.bandcamp.com', '_blank')}
				>
					<span>Buy Now</span>
				</button>
				<span
					class="block -mb-16 mt-1 font-inter text-[0.75rem] leading-[0.75rem] text-right tracking-widest lowercase"
					>or <a href="https://fanlink.to/hypertrance2">stream elsewhere</a></span
				>
			</li>
			<li class="flex-1 order-1">
				<button
					class="w-full backdrop-blur shadow-lg button-neutral"
					on:click={() => window.open('http://discord.gg/673AfPB', '_blank')}
					on:auxclick={() => window.open('http://discord.gg/673AfPB', '_blank')}
				>
					<span>Discord</span>
				</button>
			</li>
		</ul>
	</section>
</main>
