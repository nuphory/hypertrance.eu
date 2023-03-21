import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import WYSTE from '$lib/assets/artists/wyste';

const EVERAFTER = new TrackBuilder()
	.setTitle('EverAfter')
	.addPrimaryArtist(WYSTE)
	.addVisualArtist(WYSTE)
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

export default EVERAFTER;
