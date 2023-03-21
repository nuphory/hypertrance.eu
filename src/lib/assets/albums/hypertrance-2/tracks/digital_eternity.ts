import { LinkBuilder, Platform } from '$lib/metadata/link';
import { TrackBuilder } from '$lib/metadata/track';

// Artists
import AEKAE from '$lib/assets/artists/aekae';
import YUUNI from '$lib/assets/artists/yuuni';
import JACKFLASH from '$lib/assets/artists/jackflash';

const DIGITAL_ETERNITY = new TrackBuilder()
	.setTitle('Digital Eternity')
	.addPrimaryArtist(AEKAE)
	.addPrimaryArtist(YUUNI)
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
