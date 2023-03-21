import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import C_ZER from '$lib/assets/artists/c_zer';
import KADACHI from '$lib/assets/artists/kadachi';
import SKXLLFLOWER from '$lib/assets/artists/skxllflower';

const I_NEED = new TrackBuilder()
	.setTitle('I NEED')
	.addPrimaryArtist(C_ZER)
	.addVisualArtist(KADACHI)
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

export default I_NEED;
