import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import VOXKAI from '$lib/assets/artists/voxkai';
import NOBONUS from '$lib/assets/artists/nobonus';

const THROUGH_THE_FOREST = new TrackBuilder()
	.setTitle('Through The Forest')
	.addPrimaryArtist(VOXKAI)
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

export default THROUGH_THE_FOREST;
