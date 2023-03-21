import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import LUNANESCENCE from '$lib/assets/artists/lunanescence';
import LUNA_LENTA from '$lib/assets/artists/luna_lenta';
import NUPHORY from '$lib/assets/artists/nuphory';

const MOON_SHINE = new TrackBuilder()

	.setTitle('Moon Shine')
	.addPrimaryArtist(LUNANESCENCE)
	.addPrimaryArtist(LUNA_LENTA)
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

export default MOON_SHINE;
