import { ArtistBuilder } from '$src/lib/legacy/metadata/artist';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

const GASKER = new ArtistBuilder()
	.setName('Gasker')
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.YOUTUBE)
			.setUrl('https://www.youtube.com/@gaskerbpm')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SOUNDCLOUD)
			.setUrl('https://soundcloud.com/gasker')
			.setPriority(0)
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://www.instagram.com/gaskerbpm')
			.create()
	)
	.addLink(
		new LinkBuilder().setPlatform(Platform.TWITTER).setUrl('https://twitter.com/Gasker8').create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITCH)
			.setUrl('https://www.twitch.tv/gaskerbpm')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.DEVIANT_ART)
			.setUrl('https://www.deviantart.com/gasker8')
			.create()
	)
	.create();

export default GASKER;
