<script lang="ts">
	// Imports
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	import tracklist from '$lib/assets/tracklist';

	onMount(() => {
		if (!browser) return;
		document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
		window.addEventListener('scroll', () => {
			document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
		});
	});
</script>

<main>
	<section class="justify-center overflow-clip">
		<iframe
			class="
                                transition-none
                                absolute left-1/2 top-1/2 
                                -translate-y-[calc(50%-var(--scroll-y,0px)/2)] -translate-x-1/2 scale-125
                                aspect-video min-w-full min-h-full
                                pointer-events-none
                        "
			title="Hypertrance 2 bg-video"
			frameborder="0"
			src="https://www.youtube-nocookie.com/embed/nONsDtHZk5Y?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1&start=9"
		/>

		<div
			class="
                                content-[''] absolute inset-0 bg-black opacity-25 z-0
                        "
		/>

		<div
			class="
                                container
                                relative 
                                grid grid-cols-1 auto-cols-min xl:grid-cols-[1.78fr_1fr] items-start
                                max-w-2xl xl:max-w-7xl m-auto

                                
                                after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-75 after:z-0
                                [&>*]:z-10
                        "
		>
			<!-- Artistic / Flair divs -->
			<div
				class="
                                        absolute
                                        top-0 max-xl:left-0 xl:right-0
                                        h-12 xl:h-12 min-[1342px]:h-[3.4rem] 
                                        w-48 xl:w-64
                                        border-t-2 max-xl:border-l-2 xl:border-r-2 
                                        pointer-events-none opacity-100
                                "
			/>
			<div
				class="
                                        absolute
                                        top-12 xl:top-12 min-[1342px]:top-[3.4rem] max-xl:left-0 xl:right-0
                                        w-5 xl:w-28 min-[1342px]:w-6
                                        border-t-2 
                                        pointer-events-none opacity-100
                                "
			/>
			<div
				class="
                                        absolute
                                        top-14 xl:top-14 min-[1342px]:top-[3.9rem] max-xl:left-0 xl:right-0
                                        h-48 
                                        w-2 xl:w-6 min-[1342px]:w-2
                                        border-t-2 max-xl:border-l-2 xl:border-r-2
                                        pointer-events-none opacity-100
                                "
			/>
			<h1 class="shrink row-start-1 xl:col-start-2 m-8">HYPERTRANCE 2</h1>
			<!-- TODO update youtube video ID -->
			<iframe
				class="
                                                row-span-6
                                                aspect-video w-[calc(100%+4rem)] xl:w-full
						max-xl:shadow-black/50 max-xl:shadow-2xl
                                                -mx-8 xl:mx-0
                                        "
				src="https://www.youtube-nocookie.com/embed/nONsDtHZk5Y?start=9"
				title="Hypertrance 2"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
			<p class="m-8 xl:mt-0 xl:col-start-2">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem debitis velit asperiores quae
				repudiandae, quo architecto libero culpa nesciunt eos quidem doloribus? Iure hic nemo,
				deleniti sequi porro at modi!
			</p>
			<ul class="xl:mx-8 xl:col-start-2 flex flex-row items-center gap-4">
				<!-- Buy button -->
				<li><button class="button-primary"><b>Buy Now</b></button></li>
				<!-- Stream link -->
				<li><a href="/" class="underline">Stream elsewhere</a></li>
			</ul>
		</div>
	</section>
	<section>
		<div class="mx-auto max-w-7xl">
			<h2>TRACKLIST</h2>
			<ol class="list-decimal max-w-lg">
				{#each tracklist as track}
					<li class="ml-8">
						<div class="flex gap-1">
							<div class="tracklist__artists flex-1 text-left">
								{#each track.artists as artist, i}
									{#if i !== 0}
										<span class="tracklist__combinator">&nbsp&</span>
									{/if}
									{#if artist.link}
										<a href={artist.link} class="tracklist__artist">{artist.name}</a>
									{:else}
										<span class="tracklist__artist">{artist.name}</span>
									{/if}
								{/each}
							</div>
							<span class="tracklist__separator">-</span>
							<span class="tracklist__title flex-1">
								{#if track.link}
									<a href={track.link}>{track.title}</a>
								{:else}
									{track.title}
								{/if}
							</span>
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</section>
</main>

<style lang="scss">
	:root {
		--scroll-y: 0px;
	}
	ul {
		*:not(:first-child) {
			&::before {
				@apply content-['or'] mr-4;
			}
		}
	}
</style>
