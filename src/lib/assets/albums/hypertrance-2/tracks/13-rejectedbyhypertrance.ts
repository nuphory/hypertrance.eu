import { LinkBuilder, Platform } from '$lib/metadata/link';

import NOBONUS from '$lib/assets/artists/nobonus';
// Artists
import STILL_CRISP from '$lib/assets/artists/still_crisp';
import { TrackBuilder } from '$lib/metadata/track';

const REJECTEDBYHYPERTRANCE = new TrackBuilder()
	.setTitle('REJECTEDBYHYPERTRANCE')
	.addPrimaryArtist(STILL_CRISP)
	.addVisualArtist(NOBONUS)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.BANDCAMP)
			.setUrl('https://hypertrance.bandcamp.com/album/hypertrance-2')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/track/1qFRfT2qLOIaVGp87uzpDS')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.APPLE_MUSIC)
			.setUrl('https://music.apple.com/us/album/rejectedbyhypertrance/1676638767')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TIDAL)
			.setUrl('https://tidal.com/browse/track/281197160')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.DEEZER)
			.setUrl('https://deezer.page.link/WXqWcSZEfVz7hXN68')
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

export default REJECTEDBYHYPERTRANCE;
