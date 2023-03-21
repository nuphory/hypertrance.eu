import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import CRAYVXN from '$lib/assets/artists/crayvxn';
import KIMI_TAKEMURA from '$lib/assets/artists/kimi_takemura';
import SKXLLFLOWER from '$lib/assets/artists/skxllflower';

const GHOST_WIRE = new TrackBuilder()
	.setTitle('Ghost Wire')
	.addPrimaryArtist(CRAYVXN)
	.addVisualArtist(KIMI_TAKEMURA)
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

export default GHOST_WIRE;
