import { ArtistBuilder } from '$src/lib/legacy/metadata/artist';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

const WYSTE = new ArtistBuilder()
	.setName('wyste')
	.addLink(
		new LinkBuilder().setPlatform(Platform.BANDCAMP).setUrl('https://wyste.bandcamp.com/').create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.YOUTUBE)
			.setUrl('https://www.youtube.com/@wystemusic')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SOUNDCLOUD)
			.setUrl('https://soundcloud.com/wyste')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://www.instagram.com/_wyste')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITTER)
			.setUrl('https://twitter.com/_wyste')
			.setPriority(0)
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITCH)
			.setUrl('https://www.twitch.tv/wystemusic')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.DEVIANT_ART)
			.setUrl('https://www.deviantart.com/wyste14')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TUMBLR)
			.setUrl('https://www.tumblr.com/wyste1414')
			.create()
	)
	.create();

export default WYSTE;
