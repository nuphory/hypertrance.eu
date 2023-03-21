import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import STILL_CRISP from '$lib/assets/artists/still_crisp';
import NOBONUS from '$lib/assets/artists/nobonus';

const REJECTEDBYHYPERTRANCE = new TrackBuilder()
	.setTitle('REJECTEDBYHYPERTRANCE')
	.addPrimaryArtist(STILL_CRISP)
	.addVisualArtist(NOBONUS)
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

export default REJECTEDBYHYPERTRANCE;
