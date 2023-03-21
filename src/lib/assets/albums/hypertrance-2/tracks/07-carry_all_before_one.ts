import { LinkBuilder, Platform } from '$lib/metadata/link';

// Artists
import LURE_RABBIT from '$lib/assets/artists/lure_rabbit';
import NAIMENG from '$lib/assets/artists/naimeng';
import NUPHORY from '$lib/assets/artists/nuphory';
import { TrackBuilder } from '$lib/metadata/track';

const CARRY_ALL_BEFORE_ONE = new TrackBuilder()
	.setTitle('Carry All Before One')
	.addPrimaryArtist(LURE_RABBIT)
	.addPrimaryArtist(NAIMENG)
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
			.setUrl('https://open.spotify.com/track/73GqjIR3C8AkEKAj6ZO1rk')
			.create()
	)
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.APPLE_MUSIC)
	// 		.setUrl('https://music.apple.com/us/album/carry-all-before-one-feat-naimeng/1676638767')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.TIDAL)
	// 		.setUrl('https://tidal.com/browse/track/281197154')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.DEEZER)
	// 		.setUrl('https://deezer.page.link/9hXXqP6M6zKciwQz9')
	// 		.create()
	// )
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.YOUTUBE_MUSIC)
	// 		.setUrl('https://music.youtube.com/watch?v=XFviYce8CfA&feature=share')
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

export default CARRY_ALL_BEFORE_ONE;
