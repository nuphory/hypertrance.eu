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
	<section id="about" class="transition-quick duration-default ease-out container [&>ul]:list-disc">
		<h2>what is hypertrance?</h2>
		<h3 class="mt-8 mb-0">hypertrance</h3>
		<i>coined by nuphory, Aekae</i>
		<ul class="ml-4 mt-2">
			<li>very open BPM range (135-180)</li>
			<li>high energy in the drops</li>
			<li>big 4x4 trance drums</li>
			<li>tight mixing</li>
			<li>strong emphasis on emotional impact (chord progs, "epic" sounds)</li>
			<li>grand storytelling in the tracks</li>
			<li>emotional, quieter (maybe piano driven) breakdowns</li>
			<li>heavy emphasis on using authentic feeling sounds</li>
			<li>capturing the optimstic futurism of y2k</li>
		</ul>
		<h3 class="mt-8 mb-0">neotrance (VS)</h3>
		<i>coined by virtual self</i>
		<ul class="ml-4 mt-2">
			<li>using various hardtrance and hardcore elements</li>
			<li>reminiscent of beatmania / DDR type music</li>
			<li>emphasis on lain sorta vibes</li>
			<li>cyberia</li>
			<li>dystopian future</li>
			<li>bpm range from 140-180</li>
			<li>beats can be 4x4 or halftime, very trancey drums</li>
			<li>speedcore added into tracks regularly</li>
		</ul>

		<h3 class="mt-8 mb-0">sextrance</h3>
		<i>coined by purity filter</i>
		<ul class="ml-4 mt-2">
			<li>bpm range very wide (140-200)</li>
			<li>heavy use of sound degradation in the mixes</li>
			<li>captures a sort of early youtube type feeling</li>
			<li>heavy emphasis on fast drumbeats</li>
		</ul>

		<h3 class="mt-8 mb-0">neotrance (techno)</h3>
		<i>coined by ???</i>
		<ul class="ml-4 mt-2">
			<li>techno genre, can probably find definition online</li>
		</ul>

		<h3 class="mt-8 mb-0">hardwave</h3>
		<i>coined by ???</i>
		<ul class="ml-4 mt-2">
			<li>mixture of trap beats and trance synths</li>
			<li>bpms around 150</li>
			<li>halftime drums, very trap influenced</li>
			<li>overall ethereal vibe</li>
			<li>lots of pad and atmosphere usage</li>
		</ul>

		<button
			class="w-full button-neutral mt-8"
			on:click={() => window.open('http://discord.gg/673AfPB', '_blank')}
			on:auxclick={() => window.open('http://discord.gg/673AfPB', '_blank')}
		>
			<span>Join our Discord</span>
		</button>
	</section>
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
					class="w-full backdrop-blur shadow-lg button-neutral "
					on:click={() => window.open('http://discord.gg/673AfPB', '_blank')}
					on:auxclick={() => window.open('http://discord.gg/673AfPB', '_blank')}
				>
					<span>Discord</span>
				</button>
			</li>
		</ul>
	</section>
</main>
