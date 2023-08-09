import { TrackBuilder } from '$src/lib/legacy/metadata/track';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

// Musicians & Visual Artists
import NUPHORY from '$lib/assets/artists/nuphory';
import LUNA_LENTA from '$lib/assets/artists/luna_lenta';
// Audio
import mp3 from '$lib/assets/albums/hypertrance-2/audio/mp3/06-exoplanet_hypertrance.mp3';
import opus from '$lib/assets/albums/hypertrance-2/audio/opus/06-exoplanet_hypertrance.ogg';

const EXOPLANET_HYPERTRANCE = new TrackBuilder()
	.addAudioSrc(opus)
	.addAudioSrc(mp3)
	.setTitle('EXOPLANET // HYPERTRANCE')
	.addPrimaryArtist(NUPHORY)
	.addPrimaryArtist(LUNA_LENTA)
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
			.setUrl('https://open.spotify.com/track/0qyTSz0j8jwLS3RFbKEbG8')
			.create()
	)
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.APPLE_MUSIC)
	// 		.setUrl('https://music.apple.com/us/album/exoplanet-hypertrance/1676638767')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.TIDAL)
	// 		.setUrl('https://tidal.com/browse/track/281197152')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.DEEZER)
	// 		.setUrl('https://deezer.page.link/Jm1T2bFZEhfMx2v28')
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

export default EXOPLANET_HYPERTRANCE;
