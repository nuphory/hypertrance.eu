import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import D4VT0R from '$lib/assets/artists/d4vt0r';
import LINSANG from '$lib/assets/artists/linsang';
import SKXLLFLOWER from '$lib/assets/artists/skxllflower';
import NUPHORY from '$lib/assets/artists/nuphory';

const WAIT_FOR_ME = new TrackBuilder()
	.setTitle('Wait For Me')
	.addPrimaryArtist(D4VT0R)
	.addVisualArtist(LINSANG)
	.addVisualArtist(NUPHORY)
	// .addVisualArtist(SKXLLFLOWER)
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

export default WAIT_FOR_ME;
