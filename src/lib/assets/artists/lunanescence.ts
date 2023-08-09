import { ArtistBuilder } from '$src/lib/legacy/metadata/artist';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

const LUNANESCENCE = new ArtistBuilder()
	.setName('Lunanescence')
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.BANDCAMP)
			.setUrl('https://lunanescence.bandcamp.com/')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/artist/4kwmsmcjqgP2QcSzMTuDLL')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.APPLE_MUSIC)
			.setUrl('https://music.apple.com/us/artist/lunanescence/1570829354')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SOUNDCLOUD)
			.setUrl('https://soundcloud.com/lunanescence')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://www.instagram.com/lunanescence_official')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITTER)
			.setUrl('https://twitter.com/lunanescence')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITCH)
			.setUrl('https://www.twitch.tv/lunanesence_')
			.create()
	)
	.create();

export default LUNANESCENCE;
