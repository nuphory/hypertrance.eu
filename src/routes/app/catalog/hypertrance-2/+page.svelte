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
	<section
		class="sticky bottom-0 md:h-0 md:!p-0 md:m-0 md:translate-y-full overflow-clip font-comsat-navy"
	>
		<ul class="container flex justify-evenly items-start gap-8 list-none">
			<li class="flex-1 order-2">
				<button
					class="hyper-button w-full backdrop-blur shadow-lg button-primary"
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
					class="hyper-button w-full backdrop-blur shadow-lg button-neutral"
					on:click={() => window.open('http://discord.gg/673AfPB', '_blank')}
					on:auxclick={() => window.open('http://discord.gg/673AfPB', '_blank')}
				>
					<span>Discord</span>
				</button>
			</li>
		</ul>
	</section>
</main>

<style lang="scss">
	main {
		@apply perspective-40 perspective-origin-top;
		@apply w-full;
		@apply overflow-x-clip overflow-y-scroll;
		@apply @container;

		height: calc(100vh - 5rem);
		height: calc(100dvh - 5rem);

		section {
			@apply relative;

			@apply transform-style-3d;

			&:not(:first-of-type) {
				@apply py-8;
				@apply backdrop-blur bg-black/50;
				&:not(:last-of-type) {
					@apply mb-8;
				}
			}

			// section {
			// 	@apply relative;
			// 	@apply mb-8 py-8 px-8;

			// 	@apply flex flex-col justify-between;
			// 	@apply backdrop-blur bg-black/50;
			// }
		}
	}
	button {
		// @apply bg-white bg-blend-difference;
		@apply text-[var(--button-text-main)] ring-1 ring-[var(--button-border-main)];

		@apply font-comsat-navy uppercase;
		@apply tracking-[0.2rem];

		@apply relative p-4 px-4 2xs:px-8;

		--blend-mode: difference;
		--button-background-main: var(--button-background-neutral);
		--button-border-main: var(--button-background-neutral);
		--button-text-main: var(--button-text-neutral);
		--button-text-hover: var(--button-text-neutral-hover);
		--button-text-active: var(--button-text-neutral-active);

		&.button-primary {
			--blend-mode: normal;
			// --button-background-main: var(--button-background-neutral);
			--button-background-main: var(--button-background-primary);
			--button-border-main: var(--button-background-neutral);
			// --button-border-main: var(--button-background-primary);
			--button-text-main: var(--button-text-neutral);
			// --button-text-main: var(--button-text-primary);
			--button-text-hover: var(--button-text-primary-hover);
			--button-text-active: var(--button-text-primary-active);
		}
		&.button-secondary {
			--blend-mode: normal;
			// --button-background-main: var(--button-background-neutral);
			--button-background-main: var(--button-background-secondary);
			--button-border-main: var(--button-background-neutral);
			// --button-border-main: var(--button-background-secondary);
			--button-text-main: var(--button-text-neutral);
			// --button-text-main: var(--button-text-secondary);
			--button-text-hover: var(--button-text-secondary-hover);
			--button-text-active: var(--button-text-secondary-active);
		}
		&.button-tertiary {
			--blend-mode: normal;
			// --button-background-main: var(--button-background-neutral);
			--button-background-main: var(--button-background-tertiary);
			--button-border-main: var(--button-background-neutral);
			// --button-border-main: var(--button-background-tertiary);
			--button-text-main: var(--button-text-neutral);
			// --button-text-main: var(--button-text-tertiary);
			--button-text-hover: var(--button-text-tertiary-hover);
			--button-text-active: var(--button-text-tertiary-active);
		}

		&::before {
			@apply transition-[transform,background-position,margin] duration-default ease-out absolute -z-10 inset-0 bg-left-top content-[''] mix-blend-normal;
			@apply m-0;

			background: linear-gradient(
				135deg,
				transparent 0% 25%,
				var(--button-background-main) 25% 50%,
				transparent 50% 75%,
				var(--button-background-main) 75% 100%
			);
			background-size: 550%;
		}

		&:hover {
			@apply text-[var(--button-text-hover)] ring-neutral-hover;
			&::before {
				@apply -m-1;
				background-position: 33% 33%;
			}
		}
		&:active {
			@apply scale-95;
			@apply text-[var(--button-text-active)];
			&::before {
				@apply -m-1;
				@apply bg-right-bottom;
			}
		}

		* {
			mix-blend-mode: var(--blend-mode);
			// @apply mix-blend-difference;
		}
	}
</style>
