import { ArtistBuilder } from '$src/lib/legacy/metadata/artist';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

const TAKADA = new ArtistBuilder()
	.setName('TAKADA')
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/artist/3OYVm7FAjb86t5hSXbxBk5')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.APPLE_MUSIC)
			.setUrl('https://music.apple.com/id/artist/takada/1477075751')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.YOUTUBE)
			.setUrl('https://www.youtube.com/channel/UCSc24W1FBxjJtpYJfMX-UBw')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SOUNDCLOUD)
			.setUrl('https://soundcloud.com/takada-music')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://www.instagram.com/takada.exe')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITTER)
			.setUrl('https://twitter.com/takada_dot')
			.setPriority(0)
			.create()
	)
	.create();

export default TAKADA;
