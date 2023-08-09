<script lang="ts">
	// Types
	import type { Album } from '$src/lib/legacy/metadata/album';
	import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

	// Components
	import LinkList from '$src/lib/legacy/components/utils/LinkList.svelte';
	import Artist from './Artist.svelte';
	import Track from './Track.svelte';

	// Assets
	import JEXXINIUM from '$lib/assets/artists/jexxinium';
	import SKXLLFLOWER from '$src/lib/assets/artists/skxllflower';

	export let album: Album;

	const links = [
		new LinkBuilder()
			.setPlatform(Platform.BANDCAMP)
			.setUrl('https://hypertrance.bandcamp.com/album/hypertrance-2')
			.setPriority(0)
			.create(),
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/album/1iUfnoO7rSOisgFneqNcVV')
			.create(),
		// new LinkBuilder()
		// 	.setPlatform(Platform.APPLE_MUSIC)
		// 	.setUrl('https://music.apple.com/us/album/hypertrance-2/1676638767')
		// 	.create(),
		// new LinkBuilder()
		// 	.setPlatform(Platform.TIDAL)
		// 	.setUrl('https://listen.tidal.com/album/281197146')
		// 	.create(),
		// new LinkBuilder()
		// 	.setPlatform(Platform.DEEZER)
		// 	.setUrl('https://www.deezer.com/en/album/416326587')
		// 	.create(),
		new LinkBuilder().setPlatform(Platform.YOUTUBE).setUrl('https://youtu.be/3sCu-zjVa5c').create()
	];

	links.sort((a, b) => a.priority - b.priority);
</script>

<section class={$$restProps.class} id="album">
	<h2>
		<span class="group relative"
			><a href={links[0].url}>{album.title}</a><LinkList class="text-base" {links} /></span
		>
	</h2>
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
