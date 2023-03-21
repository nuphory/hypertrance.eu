import { LinkBuilder, Platform } from '$lib/metadata/link';

// Artists
import NOAH_B from '$lib/assets/artists/noah_b';
import TAKADA from '$lib/assets/artists/takada';
import { TrackBuilder } from '$lib/metadata/track';

const SOUL_VERTEX = new TrackBuilder()
	.setTitle('Soul Vertex')
	.addPrimaryArtist(NOAH_B)
	.addVisualArtist(TAKADA)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.BANDCAMP)
			.setUrl('https://hypertrance.bandcamp.com/album/hypertrance-2')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/track/3x4wzkPCpyTCcLxQVB2U6V')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.APPLE_MUSIC)
			.setUrl('https://music.apple.com/us/album/soul-vertex/1676638767')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TIDAL)
			.setUrl('https://tidal.com/browse/track/281197168')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.DEEZER)
			.setUrl('https://deezer.page.link/gaxifXwUyE2HXE2i9')
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

export default SOUL_VERTEX;
