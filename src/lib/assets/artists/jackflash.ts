import { ArtistBuilder } from '$lib/metadata/artist';
import { LinkBuilder, Platform } from '$lib/metadata/link';

const JACKFLASH = new ArtistBuilder()
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://www.instagram.com/jackflash776')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITTER)
			.setUrl('https://twitter.com/jackflash776')
			.setPriority(0)
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.DEVIANT_ART)
			.setUrl('https://www.deviantart.com/jackflash776')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TUMBLR)
			.setUrl('https://www.tumblr.com/jackflash776')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.PATREON)
			.setUrl('https://www.patreon.com/jackflash776')
			.create()
	)
	.setName('jackflash')
	.create();

export default JACKFLASH;
