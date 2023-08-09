import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

import { ArtistBuilder } from '$src/lib/legacy/metadata/artist';

const KADACHI = new ArtistBuilder()
	.setName('kadachi')
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://www.instagram.com/kadachi_mp3')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITTER)
			.setUrl('https://twitter.com/kadachi_mp3')
			.setPriority(0)
			.create()
	)
	.create();

export default KADACHI;
