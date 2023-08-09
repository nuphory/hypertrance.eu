import { ArtistBuilder } from '$src/lib/legacy/metadata/artist';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

const YUUNI = new ArtistBuilder()
	.setName('yuuni')
	.addLink(
		new LinkBuilder().setPlatform(Platform.BANDCAMP).setUrl('https://yuuni.bandcamp.com/').create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/artist/2x7yh8Cj6IPMk46qjsZdLW')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.APPLE_MUSIC)
			.setUrl('https://music.apple.com/us/artist/yuuni/1650439511')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.YOUTUBE)
			.setUrl('https://www.youtube.com/@yuunimoosic')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SOUNDCLOUD)
			.setUrl('https://soundcloud.com/yuunimoosic')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITTER)
			.setUrl('https://twitter.com/yuunimoosic')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITCH)
			.setUrl('https://www.twitch.tv/yuunilive')
			.create()
	)
	.create();

export default YUUNI;
