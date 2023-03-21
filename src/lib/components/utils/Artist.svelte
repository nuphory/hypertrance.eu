<script lang="ts">
	import type { Artist } from '$lib/metadata/artist';

	// Components
	import LinkList from './LinkList.svelte';

	export let artist: Artist;
</script>

<div class="inline relative group">
	{#if artist.links}
		<a href={artist.links[0].url}>
			{artist.name}
		</a>
		<LinkList links={artist.links} />
	{:else}
		<span>{artist.name}</span>
	{/if}
</div>

<!-- <div class="inline relative group">
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
                        <ul 
                                class="
                                        transition-quick duration-default delay-500 ease-out 
                                        absolute flex justify-center items-center gap-2 
                                        bottom-0 left-0
                                        -translate-y-full 
                                        -my-4 
                                        p-0 group-hover:p-2
                                        max-w-0 group-hover:max-w-7xl
                                        max-h-0 group-hover:max-h-[8rem]
                                        
                                        opacity-0 group-hover:opacity-100
                                        

                                        list-none
                                        bg-black bg-opacity-50 backdrop-blur
                                "
                        >
                                {#each Object.values(artist.links) as link}
                                        <li class="aspect-square h-6 whitespace-nowrap m-0 p-0">
                                                <a class="tracklist__artist__link m-0 p-0" href={link.url}>
                                                        <Icon kind={link.platform} />
                                                </a>
                                        </li>
                                {/each}
                        </ul>
                {/if}
        {:else}
                <span class="tracklist__artist">{artist.name}</span>
        {/if}
</div> -->
