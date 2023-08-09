import { ArtistBuilder } from '$src/lib/legacy/metadata/artist';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

const AEKAE = new ArtistBuilder()
	.setName('Aekae')
	.addLink(
		new LinkBuilder().setPlatform(Platform.BANDCAMP).setUrl('https://aekae.bandcamp.com/').create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/artist/2YXVRXrYHVJrC5P1eTGYSu')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.APPLE_MUSIC)
			.setUrl('https://music.apple.com/us/artist/aekae/1545741130')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.YOUTUBE)
			.setUrl('https://www.youtube.com/@aekaemusic')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SOUNDCLOUD)
			.setUrl('https://soundcloud.com/aekaemusic')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://www.instagram.com/aekaemusic')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITTER)
			.setUrl('https://twitter.com/aekaemusic')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.FACEBOOK)
			.setUrl('https://www.facebook.com/aekaemusic')
			.create()
	)
	.addLink(
		new LinkBuilder().setPlatform(Platform.TWITCH).setUrl('https://twitch.tv/aekaemusic').create()
	)
	.create();

export default AEKAE;
