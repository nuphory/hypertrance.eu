import { LinkBuilder, Platform } from '$lib/metadata/link';

// Artists
import NUPHORY from '$lib/assets/artists/nuphory';
import { TrackBuilder } from '$lib/metadata/track';

const HYPERTRANCE = new TrackBuilder()
	.setTitle('hypertrance')
	.addPrimaryArtist(NUPHORY)
	.addVisualArtist(NUPHORY)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.BANDCAMP)
			.setUrl('https://hypertrance.bandcamp.com/album/hypertrance-2')
			.setPriority(0)
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/track/6ieCjfS9ZVMjAH8qh3VMfJ')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.APPLE_MUSIC)
			.setUrl('https://music.apple.com/us/album/hypertrance/1676638767')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TIDAL)
			.setUrl('https://tidal.com/browse/track/281197147')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.DEEZER)
			.setUrl('https://deezer.page.link/tGccZ7PniKdvUatW8')
			.create()
	)
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.YOUTUBE_MUSIC)
	// 		.setUrl('https://music.youtube.com/watch?v=vNp6MIeoANE')
	// 		.create()
	// )
	.addLink(
		new LinkBuilder().setPlatform(Platform.YOUTUBE).setUrl('https://youtu.be/3sCu-zjVa5c').create()
	)
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.WEBSITE)
	// 		.setUrl('https://hypertrance.eu/album/hypertrance-2')
	// 		.create()
	// )
	.create();

export default HYPERTRANCE;
