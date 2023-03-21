import { ArtistBuilder } from '$lib/metadata/artist';
import { LinkBuilder, Platform } from '$lib/metadata/link';

const C_ZER = new ArtistBuilder()
	.setName('C-ZER')
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.BANDCAMP)
			.setUrl('https://thisisczer.bandcamp.com/')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/artist/2PpGIcLGdpUVBwKGXLztTm')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.APPLE_MUSIC)
			.setUrl('https://music.apple.com/us/artist/c-zer/1630210572')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SOUNDCLOUD)
			.setUrl('https://soundcloud.com/thisisczer')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://www.instagram.com/thisisczer')
			.setPriority(0)
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITTER)
			.setUrl('https://twitter.com/thisisczer')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.FACEBOOK)
			.setUrl('https://www.facebook.com/thisisczer')
			.create()
	)
	.addLink(
		new LinkBuilder().setPlatform(Platform.TWITCH).setUrl('https://twitch.tv/thisisczer').create()
	)

	.create();

export default C_ZER;
