import { ArtistBuilder } from '$src/lib/legacy/metadata/artist';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

const VOXKAI = new ArtistBuilder()
	.setName('voxkai')
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SOUNDCLOUD)
			.setUrl('https://soundcloud.com/voxkai')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/artist/3IKcTlbewbdMVkmUNimaQ0')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.APPLE_MUSIC)
			.setUrl('https://music.apple.com/us/artist/voxkai/1518828664')
			.create()
	)
	.addLink(
		new LinkBuilder().setPlatform(Platform.TWITTER).setUrl('https://twitter.com/voxkai_').create()
	)
	.addLink(
		new LinkBuilder().setPlatform(Platform.BANDCAMP).setUrl('https://voxkai.bandcamp.com/').create()
	)
	.create();

export default VOXKAI;
