<script lang="ts">
	import { browser } from '$app/environment';
	import { fade } from 'svelte/transition';

	// Assets
	import tracklist from '$lib/assets/tracklist';
	import { onMount } from 'svelte';

	onMount(() => {
		if (!browser) return;

		setTimeout(async () => {
			document.querySelectorAll('iframe').forEach((el) => {
				el.setAttribute('src', `${el.dataset.src}`);
				setTimeout(async () => {
					el.classList.remove('opacity-0');
				}, 200);
			});
		}, 0);
	});
</script>

<div class="transition-quick duration-default ease-out relative mt-[24rem] md:mt-[32rem] lg:mt-[40rem] overflow-clip {$$restProps.class || ""}">
        <section
                id="premiere"
                class="container !p-0 !mb-0"
                in:fade={{ duration: 400 }}
        >
                <iframe
                        allow="autoplay;encrypted-media"
                        allowfullscreen
                        class="w-full transition-opacity duration-default ease-out aspect-video shadow-lg shadow-black/50 opacity-0"
                        frameborder=0
                        title="Hypertrance 2"
                        data-src="https://www.youtube-nocookie.com/embed/nONsDtHZk5Y?&autoplay=1&mute=1&controls=1&showinfo=1&start=9"
                />
        </section>
        <section class="container mb-8" id="tracklist" in:fade={{ duration: 400 }}>
                <h2>tracklist</h2>
                <ol class="list-decimal max-w-lg">
                        {#each tracklist as track}
                                <li class="ml-8">
                                        <div class="flex gap-1">
                                                <div class="tracklist__artists flex-1 text-left">
                                                        {#each track.artists as artist, i}
                                                                {#if artist}
                                                                        {#if i !== 0}
                                                                                <span class="tracklist__combinator">&nbsp&</span>
                                                                        {/if}
                                                                        {#if artist.links.length > 0}
                                                                                <a
                                                                                        class="tracklist__artist"
                                                                                        href={(
                                                                                                artist.links.find((link) => link.name === 'bandcamp') ??
                                                                                                artist.links.find((link) => link.name === 'spotify') ??
                                                                                                artist.links.find((link) => link.name === 'soundcloud') ??
                                                                                                artist.links[0]
                                                                                        ).url}
                                                                                >
                                                                                        {artist.name}
                                                                                </a>
                                                                        {:else}
                                                                                <span class="tracklist__artist">{artist.name}</span>
                                                                        {/if}
                                                                {/if}
                                                        {/each}
                                                </div>
                                                <span class="tracklist__separator">-</span>
                                                <span class="tracklist__title flex-1">
                                                        {#if track.links.length > 0}
                                                                <a
                                                                        class="tracklist__artist"
                                                                        href={(
                                                                                track.links.find((link) => link.name === 'bandcamp') ??
                                                                                track.links.find((link) => link.name === 'spotify') ??
                                                                                track.links.find((link) => link.name === 'soundcloud') ??
                                                                                track.links[0]
                                                                        ).url}
                                                                >
                                                                        {track.title}
                                                                </a>
                                                        {:else}
                                                                <span class="tracklist__artist">{track.title}</span>
                                                        {/if}
                                                </span>
                                        </div>
                                </li>
                        {/each}
                </ol>
        </section>
</div>
