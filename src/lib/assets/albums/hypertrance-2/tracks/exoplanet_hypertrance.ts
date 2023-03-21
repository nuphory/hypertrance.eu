import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import NUPHORY from '$lib/assets/artists/nuphory';
import LUNA_LENTA from '$lib/assets/artists/luna_lenta';

const EXOPLANET_HYPERTRANCE = new TrackBuilder()
	.setTitle('EXOPLANET // HYPERTRANCE')
	.addPrimaryArtist(NUPHORY)
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

export default EXOPLANET_HYPERTRANCE;
