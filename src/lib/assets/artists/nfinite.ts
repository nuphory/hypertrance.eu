import { ArtistBuilder } from '$src/lib/legacy/metadata/artist';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

const NFINITE = new ArtistBuilder()
	.setName('nFINITE')
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.YOUTUBE)
			.setUrl('https://www.youtube.com/@sc0924')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://www.instagram.com/infinitesky2000')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITTER)
			.setUrl('https://twitter.com/_nfinite')
			.setPriority(0)
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.DEVIANT_ART)
			.setUrl('https://www.deviantart.com/proveida')
			.create()
	)

	.create();

export default NFINITE;
