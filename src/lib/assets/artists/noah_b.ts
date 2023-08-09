import { ArtistBuilder } from '$src/lib/legacy/metadata/artist';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

const NOAH_B = new ArtistBuilder()
	.setName('Noah B')
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.BANDCAMP)
			.setUrl('https://thisisnoahb.bandcamp.com/')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/artist/4F4w1Gkfja6wPJzuMKCLmk')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.APPLE_MUSIC)
			.setUrl('https://music.apple.com/us/artist/noah-b/1071519331')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SOUNDCLOUD)
			.setUrl('https://soundcloud.com/thisisnoahb')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITCH)
			.setUrl('https://www.twitch.tv/thisisnoahb')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://www.instagram.com/_thisisnoahb')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITTER)
			.setUrl('https://twitter.com/thisisnoahb')
			.setPriority(0)
			.create()
	)
	.create();

export default NOAH_B;
