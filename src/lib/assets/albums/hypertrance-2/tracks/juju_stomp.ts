import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import DISCTR4K from '$lib/assets/artists/disctr4k';
import NUPHORY from '$lib/assets/artists/nuphory';
import SKULL_SYSTEM from '$lib/assets/artists/skull_system';

const JUJU_STOMP = new TrackBuilder()
	.setTitle('juju stomp')
	.addPrimaryArtist(DISCTR4K)
	.addVisualArtist(NUPHORY)
	.addVisualArtist(SKULL_SYSTEM)
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

export default JUJU_STOMP;
