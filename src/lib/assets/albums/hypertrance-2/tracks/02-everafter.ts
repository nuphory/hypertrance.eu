import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';
import { TrackBuilder } from '$src/lib/legacy/metadata/track';

// Musicians & Visual Artists
import WYSTE from '$lib/assets/artists/wyste';
// Audio
import mp3 from '$lib/assets/albums/hypertrance-2/audio/mp3/02-everafter.mp3';
import opus from '$lib/assets/albums/hypertrance-2/audio/opus/02-everafter.ogg';

const EVERAFTER = new TrackBuilder()
	.addAudioSrc(opus)
	.addAudioSrc(mp3)
	.setTitle('EverAfter')
	.addPrimaryArtist(WYSTE)
	.addVisualArtist(WYSTE)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.BANDCAMP)
			.setUrl('https://hypertrance.bandcamp.com/album/hypertrance-2')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/track/1fN37Cl8xhde7HpleoIyEQ')
			.create()
	)
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.APPLE_MUSIC)
	// 		.setUrl('https://music.apple.com/us/album/everafter/1676638767')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.TIDAL)
	// 		.setUrl('https://tidal.com/browse/track/281197148')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.DEEZER)
	// 		.setUrl('https://deezer.page.link/H16MrxvnCJ3S8dp76')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.YOUTUBE_MUSIC)
	// 		.setUrl('https://music.youtube.com/watch?v=6yoDkk8ykUw')
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

export default EVERAFTER;
