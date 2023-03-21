import { ArtistBuilder } from '$lib/metadata/artist';
import { LinkBuilder, Platform } from '$lib/metadata/link';

const CRAYVXN = new ArtistBuilder()
	.setName('crayvxn')
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.BANDCAMP)
			.setUrl('https://crayvxn.bandcamp.com/')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/artist/1GkulgH4pDrPg8EpIHI2hg')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.YOUTUBE)
			.setUrl('https://www.youtube.com/@crayvxn')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SOUNDCLOUD)
			.setUrl('https://soundcloud.com/crayvxn')
			.create()
	)
	.addLink(
		new LinkBuilder().setPlatform(Platform.TWITTER).setUrl('https://twitter.com/crayvxn').create()
	)
	.create();

export default CRAYVXN;
