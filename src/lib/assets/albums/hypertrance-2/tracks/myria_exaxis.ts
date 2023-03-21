import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import TYPE_R from '$lib/assets/artists/type_r';
import RANZOR_GRAPHICS from '$lib/assets/artists/ranzorgraphics';
import YAZANOO16 from '$lib/assets/artists/yazanoo16';
import NUPHORY from '$lib/assets/artists/nuphory';

const MYRIA_EXAXIS = new TrackBuilder()
	.setTitle('Myria Exaxis')
	.addPrimaryArtist(TYPE_R)
	.addVisualArtist(RANZOR_GRAPHICS)
	.addVisualArtist(YAZANOO16)
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

export default MYRIA_EXAXIS;
