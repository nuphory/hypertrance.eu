import { TrackBuilder } from '$lib/metadata/track';
import { LinkBuilder, Platform } from '$lib/metadata/link';

// Musicians
import NOBONUS from '$lib/assets/artists/nobonus';
// Visual Artists
import VOXKAI from '$lib/assets/artists/voxkai';
// Audio
import audioSrc from '$lib/assets/albums/hypertrance-2/audio/10-through_the_forest.mp3';

const THROUGH_THE_FOREST = new TrackBuilder()
	.setAudioSrc(audioSrc)
	.setTitle('Through The Forest')
	.addPrimaryArtist(VOXKAI)
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
			.setUrl('https://open.spotify.com/track/1CW78djQJmQ1Xxywkgkbq5')
			.create()
	)
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.APPLE_MUSIC)
	// 		.setUrl('https://music.apple.com/us/album/through-the-forest/1676638767')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.TIDAL)
	// 		.setUrl('https://tidal.com/browse/track/281197157')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.DEEZER)
	// 		.setUrl('https://deezer.page.link/jdUqNfECiff2mJN56')
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

export default THROUGH_THE_FOREST;
