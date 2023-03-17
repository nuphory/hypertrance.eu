<script lang="ts">
	import type { Artist } from '$lib/types/artist';
	import Icon from './Icon.svelte';

	export let artist: Artist;
</script>

<div class="inline relative group">
        {#if artist.links}
                <a
                        class="tracklist__artist"
                        href={(
                                artist.links.BANDCAMP ??
                                artist.links.SPOTIFY ??
                                artist.links.SOUNDCLOUD ??
                                Object.values(artist.links)[0]
                        ).url}
                >
                        {artist.name}
                </a>
                {#if Object.values(artist.links).length > 1}
                        <!-- Drop-up -->
                        <ul 
                                class="
                                        transition-quick duration-default delay-500 ease-out 
                                        absolute flex justify-center items-center gap-2 
                                        bottom-0 left-half 
                                        -translate-x-half -translate-y-full 
                                        -m-4 
                                        p-0 group-hover:p-2
                                        max-w-0 group-hover:max-w-7xl
                                        max-h-0 group-hover:max-h-7xl
                                        opacity-0 group-hover:opacity-100
                                        rounded-lg
                                        overflow-clip
					ring-2 ring-white

                                        bg-black bg-opacity-50 backdrop-blur
                                "
                        >
                                {#each Object.values(artist.links) as link}
                                        <li class="aspect-square h-6 whitespace-nowrap m-0 p-0">
                                                <a class="tracklist__artist__link m-0 p-0" href={link.url}>
                                                        <Icon kind={link.kind} />
                                                </a>
                                        </li>
                                {/each}
                        </ul>
                {/if}
        {:else}
                <span class="tracklist__artist">{artist.name}</span>
        {/if}
</div>
