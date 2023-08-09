import { ArtistBuilder } from '$src/lib/legacy/metadata/artist';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

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
			.setUrl('https://spacehey.com/thejexxinium')
			.create()
	)
	.create();

export default JEXXINIUM;
