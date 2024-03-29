import { TrackBuilder } from '$src/lib/legacy/metadata/track';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

// Musicians
import AEKAE from '$lib/assets/artists/aekae';
// Visual Artists
import NFINITE from '$lib/assets/artists/nfinite';
// Audio
import mp3 from '$lib/assets/albums/hypertrance-2/audio/mp3/03-infinity.mp3';
import opus from '$lib/assets/albums/hypertrance-2/audio/opus/03-infinity.ogg';

const INFINITY = new TrackBuilder()
	.addAudioSrc(opus)
	.addAudioSrc(mp3)
	.setTitle('Infinity')
	.addPrimaryArtist(AEKAE)
	.addVisualArtist(NFINITE)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.BANDCAMP)
			.setUrl('https://hypertrance.bandcamp.com/album/hypertrance-2')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/track/1VBjFQzc6B0Mcd6a8bP7lf')
			.create()
	)
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.APPLE_MUSIC)
	// 		.setUrl('https://music.apple.com/us/album/infinity/1676638767')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.TIDAL)
	// 		.setUrl('https://tidal.com/browse/track/281197149')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.DEEZER)
	// 		.setUrl('https://deezer.page.link/afrKAPJi9pCdtYiJ8')
	// 		.create()
	// )
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

export default INFINITY;
