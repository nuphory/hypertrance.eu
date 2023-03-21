import { LinkBuilder, Platform } from '$lib/metadata/link';

// Artists
import CRAYVXN from '$lib/assets/artists/crayvxn';
import KIMI_TAKEMURA from '$lib/assets/artists/kimi_takemura';
import SKXLLFLOWER from '$lib/assets/artists/skxllflower';
import { TrackBuilder } from '$lib/metadata/track';

const GHOST_WIRE = new TrackBuilder()
	.setTitle('Ghost Wire')
	.addPrimaryArtist(CRAYVXN)
	.addVisualArtist(KIMI_TAKEMURA)
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
			.setUrl('https://open.spotify.com/track/2pfHMiXkTMxAb6nCbnfcrE')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.APPLE_MUSIC)
			.setUrl('https://music.apple.com/us/album/ghost-wire/1676638767')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TIDAL)
			.setUrl('https://tidal.com/browse/track/281197155')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.DEEZER)
			.setUrl('https://deezer.page.link/HyegBSVD5y84aqq89')
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

export default GHOST_WIRE;
