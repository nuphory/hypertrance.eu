import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import GASKER from '$lib/assets/artists/gasker';
import NUPHORY from '$lib/assets/artists/nuphory';
import NEUROLINK from '$lib/assets/artists/neurolink';

const ASK_THE_UNIVERSE = new TrackBuilder()
	.setTitle('Ask The Universe')
	.addPrimaryArtist(GASKER)
	.addVisualArtist(NUPHORY)
	.addVisualArtist(NEUROLINK)
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

export default ASK_THE_UNIVERSE;
