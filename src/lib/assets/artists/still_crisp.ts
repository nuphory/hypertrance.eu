import { ArtistBuilder } from '$lib/metadata/artist';
import { LinkBuilder, Platform } from '$lib/metadata/link';

const STILL_CRISP = new ArtistBuilder()
	.setName('still crisp')
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.BANDCAMP)
			.setUrl('https://soundcloud.com/stillcrisp')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SPOTIFY)
			.setUrl('https://open.spotify.com/artist/7I0omdF0bBVakabsP93fJA')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.APPLE_MUSIC)
			.setUrl('https://music.apple.com/us/artist/still-crisp/1537379112')
			.create()
	)
	.addLink(
		new LinkBuilder().setPlatform(Platform.YOUTUBE).setUrl('https://twitch.tv/stillcrisp').create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.SOUNDCLOUD)
			.setUrl('https://www.youtube.com/@stillcrisp9106')
			.setPriority(0)
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.TWITTER)
			.setUrl('https://twitter.com/still_crisp')
			.create()
	)
	.create();

export default STILL_CRISP;
