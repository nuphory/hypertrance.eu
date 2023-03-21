import { ArtistBuilder } from '$lib/metadata/artist';
import { LinkBuilder, Platform } from '$lib/metadata/link';

const RANZOR_GRAPHICS = new ArtistBuilder()
	.setName('ranzorgraphics')
	.addLink(
		new LinkBuilder().setPlatform(Platform.WEBSITE).setUrl('https://ranzor.graphics').create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://www.instagram.com/ranzorgraphics')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITTER)
			.setUrl('https://twitter.com/ranzorgraphics')
			.setPriority(0)
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.DEVIANT_ART)
			.setUrl('https://www.deviantart.com/ranzorgraphics')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TUMBLR)
			.setUrl('https://ranzorgraphics.tumblr.com/')
			.create()
	)
	.create();

export default RANZOR_GRAPHICS;
