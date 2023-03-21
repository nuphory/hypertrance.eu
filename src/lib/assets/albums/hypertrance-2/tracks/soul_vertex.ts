import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import NOAH_B from '$lib/assets/artists/noah_b';
import TAKADA from '$lib/assets/artists/takada';

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
	// .addLink(
	// 	new LinkBuilder()
	// 		.setPlatform(Platform.WEBSITE)
	// 		.setUrl('https://hypertrance.eu/album/hypertrance-2')
	// 		.create()
	// )
	.create();

export default SOUL_VERTEX;
