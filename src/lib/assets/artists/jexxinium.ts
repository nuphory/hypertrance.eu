import { ArtistBuilder } from '$lib/metadata/artist';
import { LinkBuilder, Platform } from '$lib/metadata/link';

// TODO: Add links
const JEXXINIUM = new ArtistBuilder()
	.setName('jexxinium')
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.WEBSITE)
			.setUrl('https://thejexxinium.neocities.org/')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.DEVIANT_ART)
			.setUrl('https://www.deviantart.com/thejexxinium')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPACEHEY)
			.setUrl('https://www.deviantart.com/thejexxinium')
			.create()
	)
	.create();

export default JEXXINIUM;
