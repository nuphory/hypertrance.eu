import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import KASSIO_PROJECT from '$lib/assets/artists/kassio_project';

const DRYFTCURRENT = new TrackBuilder()
	.setTitle('Dryftcurrent')
	.addPrimaryArtist(KASSIO_PROJECT)
	.addVisualArtist(KASSIO_PROJECT)
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

export default DRYFTCURRENT;
