import { LinkBuilder, Platform } from '$lib/metadata/link';

// Artists
import AEKAE from '$lib/assets/artists/aekae';
import JACKFLASH from '$lib/assets/artists/jackflash';
import { TrackBuilder } from '$lib/metadata/track';
import YUUNI from '$lib/assets/artists/yuuni';

const DIGITAL_ETERNITY = new TrackBuilder()
	.setTitle('Digital Eternity')
	.addPrimaryArtist(YUUNI)
	.addPrimaryArtist(AEKAE)
	.addVisualArtist(JACKFLASH)
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

export default DIGITAL_ETERNITY;
