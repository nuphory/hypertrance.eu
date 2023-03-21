import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import MOSHII_LIGHTZ from '$lib/assets/artists/moshii_lightz';
import NUPHORY from '$lib/assets/artists/nuphory';

const SSR05 = new TrackBuilder()
	.setTitle('SSR05')
	.addPrimaryArtist(MOSHII_LIGHTZ)
	.addVisualArtist(NUPHORY)
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

export default SSR05;
