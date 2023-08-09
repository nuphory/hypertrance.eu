import { ArtistBuilder } from '$src/lib/legacy/metadata/artist';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

const AUSA = new ArtistBuilder()
	.setName('ausa')
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.BANDCAMP)
			.setUrl('https://ausaofficial.bandcamp.com/')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/artist/1mBXHykqQ0zTJafC86uBgO')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.APPLE_MUSIC)
			.setUrl('https://music.apple.com/us/artist/ausa/1533581292')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.YOUTUBE)
			.setUrl('https://www.youtube.com/@ausamusicofficial')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SOUNDCLOUD)
			.setUrl('https://soundcloud.com/ausamusicofficial')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://www.instagram.com/__ausa__')
			.create()
	)
	.addLink(
		new LinkBuilder().setPlatform(Platform.TWITTER).setUrl('https://twitter.com/AusaMusic').create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.FACEBOOK)
			.setUrl('https://www.facebook.com/ausaMusicOfficial')
			.create()
	)
	.addLink(
		new LinkBuilder().setPlatform(Platform.TWITCH).setUrl('https://twitch.tv/ausaofficial').create()
	)
	.create();

export default AUSA;
