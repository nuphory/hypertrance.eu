import { TrackBuilder } from '$lib/metadata/track';
import { LinkBuilder, Platform } from '$lib/metadata/link';

// Musicians
import DISCTR4K from '$lib/assets/artists/disctr4k';
// Visual Artists
import NUPHORY from '$lib/assets/artists/nuphory';
import SKULL_SYSTEM from '$lib/assets/artists/skull_system';
// Audio
import audioSrc from '$lib/assets/albums/hypertrance-2/audio/19-juju_stomp.mp3';

const JUJU_STOMP = new TrackBuilder()
	.setAudioSrc(audioSrc)
	.setTitle('juju stomp')
	.addPrimaryArtist(DISCTR4K)
	.addVisualArtist(NUPHORY)
	.addVisualArtist(SKULL_SYSTEM)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.BANDCAMP)
			.setUrl('https://hypertrance.bandcamp.com/album/hypertrance-2')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/track/1Ry4uxyM59XB8NqIZrJHjP')
			.create()
	)
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.APPLE_MUSIC)
	// 		.setUrl('https://music.apple.com/us/album/juju-stomp/1676638767')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.TIDAL)
	// 		.setUrl('https://tidal.com/browse/track/281197166')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.DEEZER)
	// 		.setUrl('https://deezer.page.link/bp9QnsKNPzyh4ycY7')
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

export default JUJU_STOMP;
