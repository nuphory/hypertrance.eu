import { ArtistBuilder } from '$lib/metadata/artist';
import { LinkBuilder, Platform } from '$lib/metadata/link';

const NOBONUS = new ArtistBuilder()
	.setName('Nobonus')
	.addLink(new LinkBuilder().setPlatform(Platform.WEBSITE).setUrl('https://nobon.us').create())
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.YOUTUBE)
			.setUrl('https://youtube.com/@NobonusArt')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://www.instagram.com/nobonusart')
			.create()
	)
	.addLink(
		new LinkBuilder().setPlatform(Platform.TWITTER).setUrl('https://twitter.com/nobonus_').create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.NEWGROUNDS)
			.setUrl('https://nobonus.newgrounds.com')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.PATREON)
			.setUrl('https://www.patreon.com/Nobonus')
			.create()
	)
	.create();

export default NOBONUS;
