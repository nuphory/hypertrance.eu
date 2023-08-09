import { ArtistBuilder } from '$src/lib/legacy/metadata/artist';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

const KASSIO_PROJECT = new ArtistBuilder()
	.setName('Kassio Project')
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.BANDCAMP)
			.setUrl('https://kassiomusic.bandcamp.com/')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/artist/16Bu6VLyQePdnxIUqVNzRi')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.APPLE_MUSIC)
			.setUrl('https://music.apple.com/us/artist/kassio/1546480656')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.YOUTUBE)
			.setPriority(0)
			.setUrl('https://youtube.com/@kassioproject')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SOUNDCLOUD)
			.setUrl('https://soundcloud.com/kassio-971255094')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://www.instagram.com/kassio_project')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITTER)
			.setUrl('https://twitter.com/kassioproject')
			.create()
	)
	.create();

export default KASSIO_PROJECT;
