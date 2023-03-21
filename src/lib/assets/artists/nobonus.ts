import { ArtistBuilder } from '$lib/metadata/artist';
import { LinkBuilder, Platform } from '$lib/metadata/link';

// TODO: Add links
const NOBONUS = new ArtistBuilder()
	.setName('Nobonus')

	.create();

export default NOBONUS;
