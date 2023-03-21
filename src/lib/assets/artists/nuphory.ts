import { ArtistBuilder } from '$lib/metadata/artist';
import { LinkBuilder, Platform } from '$lib/metadata/link';

const NUPHORY = new ArtistBuilder()
	.setName('nuphory')
	.addLink(new LinkBuilder().setUrl('https://nuphory.com/').setPlatform(Platform.WEBSITE).create())
	.addLink(
		new LinkBuilder()
			.setUrl('https://nuphory.bandcamp.com/')
			.setPlatform(Platform.BANDCAMP)
			.setPriority(0)
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setUrl('https://open.spotify.com/artist/2K0uRwlc2VKeRoWS8Iuija')
			.setPlatform(Platform.SPOTIFY)
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setUrl('https://music.apple.com/us/artist/nuphory/1638776851')
			.setPlatform(Platform.APPLE_MUSIC)
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setUrl('https://www.youtube.com/nuphory')
			.setPlatform(Platform.YOUTUBE)
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setUrl('https://soundcloud.com/nuphory')
			.setPlatform(Platform.SOUNDCLOUD)
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setUrl('https://www.instagram.com/nuphory')
			.setPlatform(Platform.INSTAGRAM)
			.create()
	)
	.addLink(
		new LinkBuilder().setUrl('https://twitter.com/nuphory').setPlatform(Platform.TWITTER).create()
	)
	.addLink(
		new LinkBuilder()
			.setUrl('https://www.facebook.com/nuphory')
			.setPlatform(Platform.FACEBOOK)
			.create()
	)
	.addLink(
		new LinkBuilder().setUrl('https://twitch.tv/nuphory').setPlatform(Platform.TWITCH).create()
	)
	.create();

export default NUPHORY;
