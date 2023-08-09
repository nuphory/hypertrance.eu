import { ArtistBuilder } from '$src/lib/legacy/metadata/artist';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

const YAZANOO16 = new ArtistBuilder()
	.setName('yazan a.')
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.YOUTUBE)
			.setUrl('https://youtube.com/@yazana.2187')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://instagram.com/attra.kt')
			.create()
	)
	.addLink(
		new LinkBuilder().setPlatform(Platform.TWITTER).setUrl('https://twitter.com/yazanoo16').create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.DEVIANT_ART)
			.setUrl('https://www.deviantart.com/attrakt')
			.create()
	)
	.create();

export default YAZANOO16;
