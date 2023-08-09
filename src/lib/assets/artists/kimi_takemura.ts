import { ArtistBuilder } from '$src/lib/legacy/metadata/artist';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

const KIMI_TAKEMURA = new ArtistBuilder()
	.setName('ᛕIᗰI 丅ᗩᛕᗴᗰᑌᖇᗩ')
	.addLink(
		new LinkBuilder().setPlatform(Platform.WEBSITE).setUrl('https://kimitakemura.com/').create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.INSTAGRAM)
			.setUrl('https://www.instagram.com/kimitakemura')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITTER)
			.setUrl('https://twitter.com/kimitakemura')
			.create()
	)
	.create();

export default KIMI_TAKEMURA;
