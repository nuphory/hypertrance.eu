import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import AEKAE from '$lib/assets/artists/aekae';
import NFINITE from '$lib/assets/artists/nfinite';

const INFINITY = new TrackBuilder()
	.setTitle('Infinity')
	.addPrimaryArtist(AEKAE)
	.addVisualArtist(NFINITE)
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

export default INFINITY;
