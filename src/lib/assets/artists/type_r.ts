import { ArtistBuilder } from '$lib/metadata/artist';
import { LinkBuilder, Platform } from '$lib/metadata/link';

const TYPE_R = new ArtistBuilder()
	.setName('Type R')
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.BANDCAMP)
			.setUrl('https://type-r.bandcamp.com ')
			.setPriority(0)
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/artist/15guHFW3ZQDoaWttbI2IRp')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.APPLE_MUSIC)
			.setUrl('https://music.apple.com/us/artist/type-r/1545000338')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.YOUTUBE)
			.setUrl('https://www.youtube.com/@typer8631')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SOUNDCLOUD)
			.setUrl('https://soundcloud.com/hiimtype_r')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://instagram.com/typerhxc')
			.create()
	)
	.addLink(
		new LinkBuilder().setPlatform(Platform.TWITTER).setUrl('https://twitter.com/imTYPE_R').create()
	)
	.addLink(
		new LinkBuilder().setPlatform(Platform.TWITCH).setUrl('https://twitch.tv/type_rrr').create()
	)
	.create();

export default TYPE_R;
