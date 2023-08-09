import { TrackBuilder } from '$src/lib/legacy/metadata/track';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

// Musicians
import D4VT0R from '$lib/assets/artists/d4vt0r';
// Visual Artists
import LINSANG from '$lib/assets/artists/linsang';
import NUPHORY from '$lib/assets/artists/nuphory';
// Audio
import mp3 from '$lib/assets/albums/hypertrance-2/audio/mp3/12-wait_for_me.mp3';
import opus from '$lib/assets/albums/hypertrance-2/audio/opus/12-wait_for_me.ogg';

const WAIT_FOR_ME = new TrackBuilder()
	.addAudioSrc(opus)
	.addAudioSrc(mp3)
	.setTitle('Wait For Me')
	.addPrimaryArtist(D4VT0R)
	.addVisualArtist(LINSANG)
	.addVisualArtist(NUPHORY)
	// .addVisualArtist(SKXLLFLOWER)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.BANDCAMP)
			.setUrl('https://hypertrance.bandcamp.com/album/hypertrance-2')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/track/6ROnjtqK8GjYYKVU9bCVH4')
			.create()
	)
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.APPLE_MUSIC)
	// 		.setUrl('https://music.apple.com/us/album/wait-for-me/1676638767')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.TIDAL)
	// 		.setUrl('https://tidal.com/browse/track/281197159')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.DEEZER)
	// 		.setUrl('https://deezer.page.link/iZfhzv8x39LK7ho36')
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

export default WAIT_FOR_ME;
