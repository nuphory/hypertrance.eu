import { ArtistBuilder } from '$lib/metadata/artist';
import { LinkBuilder, Platform } from '$lib/metadata/link';

const LURE_RABBIT = new ArtistBuilder()
	.setName('Lure Rabbit')
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SOUNDCLOUD)
			.setPriority(0)
			.setUrl('https://soundcloud.com/lurerabbit')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://www.instagram.com/lurerabbit_')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITTER)
			.setUrl('https://twitter.com/rabbit_lure')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.FACEBOOK)
			.setUrl('https://www.facebook.com/lurerabbit')
			.create()
	)
	.addLink(
		new LinkBuilder().setPlatform(Platform.FORIIO).setUrl('https://fori.io/lure-rabbit').create()
	)
	.create();

export default LURE_RABBIT;
