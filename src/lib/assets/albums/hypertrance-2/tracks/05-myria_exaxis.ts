import { TrackBuilder } from '$lib/metadata/track';
import { LinkBuilder, Platform } from '$lib/metadata/link';

// Musicians
import TYPE_R from '$lib/assets/artists/type_r';
// Visual Artists
import RANZOR_GRAPHICS from '$lib/assets/artists/ranzorgraphics';
import YAZANOO16 from '$lib/assets/artists/yazanoo16';
import NUPHORY from '$lib/assets/artists/nuphory';
// Audio
import audioSrc from '$lib/assets/albums/hypertrance-2/audio/05-myria_exaxis.mp3';

const MYRIA_EXAXIS = new TrackBuilder()
	.setAudioSrc(audioSrc)
	.setTitle('Myria Exaxis')
	.addPrimaryArtist(TYPE_R)
	.addVisualArtist(RANZOR_GRAPHICS)
	.addVisualArtist(YAZANOO16)
	.addVisualArtist(NUPHORY)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.BANDCAMP)
			.setUrl('https://hypertrance.bandcamp.com/album/hypertrance-2')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/track/5lhs5mrlxKgGRT0KQvztEk')
			.create()
	)
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.APPLE_MUSIC)
	// 		.setUrl('https://music.apple.com/us/album/myria-exaxis/1676638767')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.TIDAL)
	// 		.setUrl('https://tidal.com/browse/track/281197151')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.DEEZER)
	// 		.setUrl('https://deezer.page.link/LofG6WNLmpdfUHmh8')
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

export default MYRIA_EXAXIS;
