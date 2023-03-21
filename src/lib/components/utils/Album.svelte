<script lang="ts">
	import type { Album } from '$lib/metadata/album';

	// Components
	import Track from './Track.svelte';

	export let album: Album;
</script>

<section class={$$restProps.class} id="album">
	<h2>{album.title}</h2>
	<ol id="tracklist">
		{#each album.trackList as track, i}
			<Track {track} trackno={i} />
		{/each}
	</ol>
</section>
