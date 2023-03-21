import { TrackBuilder } from '$lib/metadata/track';
import { LinkBuilder, Platform } from '$lib/metadata/link';

// Musicians
import SAM_WAITIN from '$lib/assets/artists/sam_waitin';
// Visual Artists
import VLAMS from '$lib/assets/artists/vlams';
import NUPHORY from '$lib/assets/artists/nuphory';
// Audio
import audioSrc from '$lib/assets/albums/hypertrance-2/audio/17-step10.mp3';

const STEP10 = new TrackBuilder()
	.setAudioSrc(audioSrc)
	.setTitle('STEP10')
	.addPrimaryArtist(SAM_WAITIN)
	.addVisualArtist(VLAMS)
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
			.setUrl('https://open.spotify.com/track/4HN9uAHwZ0pjYXLYEK9mgy')
			.create()
	)
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.APPLE_MUSIC)
	// 		.setUrl('https://music.apple.com/us/album/step10/1676638767')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.TIDAL)
	// 		.setUrl('https://tidal.com/browse/track/281197164')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.DEEZER)
	// 		.setUrl('https://deezer.page.link/jrCtt4JpkQtDc2tq9')
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

export default STEP10;
