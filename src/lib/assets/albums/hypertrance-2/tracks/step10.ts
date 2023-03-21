import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import SAM_WAITIN from '$lib/assets/artists/sam_waitin';
import VLAMS from '$lib/assets/artists/vlams';
import NUPHORY from '$lib/assets/artists/nuphory';

const STEP10 = new TrackBuilder()
	.setTitle('STEP10')
	.addPrimaryArtist(SAM_WAITIN)
	.addVisualArtist(VLAMS)
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

export default STEP10;
