import { ArtistBuilder } from '$src/lib/legacy/metadata/artist';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

const D4VT0R = new ArtistBuilder()
	.setName('D4VT0R')
	.addLink(
		new LinkBuilder().setPlatform(Platform.BANDCAMP).setUrl('https://d4vt0r.bandcamp.com/').create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.YOUTUBE)
			.setUrl('https://www.youtube.com/@D4VT0R')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SOUNDCLOUD)
			.setUrl('https://soundcloud.com/d4vt0r')
			.create()
	)

	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://www.instagram.com/d4vt0r')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITTER)
			.setUrl('https://twitter.com/D4VT0R_')
			.setPriority(0)
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.NEWGROUNDS)
			.setUrl('https://d4vt0r.newgrounds.com/')
			.create()
	)
	.create();

export default D4VT0R;
