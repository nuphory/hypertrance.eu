import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import AUSA from '$lib/assets/artists/ausa';
import LINSANG from '$lib/assets/artists/linsang';

const TWILIGHT = new TrackBuilder()
	.setTitle('Twilight')
	.addPrimaryArtist(AUSA)
	.addVisualArtist(LINSANG)
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

export default TWILIGHT;
