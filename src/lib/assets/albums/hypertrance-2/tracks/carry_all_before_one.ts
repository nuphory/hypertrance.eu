import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import LURE_RABBIT from '$lib/assets/artists/lure_rabbit';
import NAIMENG from '$lib/assets/artists/naimeng';
import NUPHORY from '$lib/assets/artists/nuphory';

const CARRY_ALL_BEFORE_ONE = new TrackBuilder()
	.setTitle('Carry All Before One')
	.addPrimaryArtist(LURE_RABBIT)
	.addPrimaryArtist(NAIMENG)
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

export default CARRY_ALL_BEFORE_ONE;
