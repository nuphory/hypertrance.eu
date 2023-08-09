import { ArtistBuilder } from '$src/lib/legacy/metadata/artist';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

const SAM_WAITIN = new ArtistBuilder()
	.setName('SAM WAITIN')
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.BANDCAMP)
			.setUrl('https://samwaitin.bandcamp.com/')
			.setPriority(0)
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/artist/4fUt1H64XAKDyYNRqUYzPG')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.APPLE_MUSIC)
			.setUrl('https://music.apple.com/us/artist/sam-waitin/1579494907')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SOUNDCLOUD)
			.setUrl('https://soundcloud.com/samwaitin')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://www.instagram.com/samwaitin')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITTER)
			.setUrl('https://twitter.com/sam_waitin')
			.create()
	)
	.create();

export default SAM_WAITIN;
