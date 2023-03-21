import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import NEUROLINK from '$lib/assets/artists/neurolink';
import RANZOR_GRAPHICS from '$lib/assets/artists/ranzorgraphics';

const INFINITE_EVOLUTION = new TrackBuilder()
	.setTitle('Infinite Evolution')
	.addPrimaryArtist(NEUROLINK)
	.addVisualArtist(RANZOR_GRAPHICS)
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

export default INFINITE_EVOLUTION;
