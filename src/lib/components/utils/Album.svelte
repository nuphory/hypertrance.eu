<script lang="ts">
	// Types
	import type { Album } from '$lib/metadata/album';

	// Components
	import Artist from './Artist.svelte';
	import Track from './Track.svelte';

	// Assets
	import JEXXINIUM from '$lib/assets/artists/jexxinium';
	import SKXLLFLOWER from '$src/lib/assets/artists/skxllflower';

	export let album: Album;
</script>

<section class={$$restProps.class} id="album">
	<h2>{album.title}</h2>
	<ol id="tracklist">
		{#each album.trackList as track, i}
			<Track {track} trackno={i} />
		{/each}
		<li class="text-right">
			Additional credits:
			<ul>
				<li>CRT by <Artist artist={SKXLLFLOWER} /></li>
				<li>logo by <Artist artist={JEXXINIUM} /></li>
			</ul>
		</li>
	</ol>
</section>
