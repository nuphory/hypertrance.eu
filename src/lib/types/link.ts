class Link {
        constructor(public kind: LinkKind, public url: string) {}

        toString() {
                return this.url;
        }

        get name() {
                return this.kind.name;
        }
}

class LinkKind {
	static readonly SOUNDCLOUD = new LinkKind(
		'SOUNDCLOUD',
		'SoundCloud',
		'/assets/img/icon/soundcloud.svg'
	);
	static readonly SPOTIFY = new LinkKind('SPOTIFY', 'Spotify', '/assets/img/icon/spotify.svg');
	static readonly APPLE_MUSIC = new LinkKind(
		'APPLE_MUSIC',
		'Apple Music',
		'/assets/img/icon/apple_music.svg'
	);
	static readonly TWITCH = new LinkKind('TWITCH', 'Twitch', '/assets/img/icon/twitch.svg');
	static readonly YOUTUBE = new LinkKind('YOUTUBE', 'YouTube', '/assets/img/icon/youtube.svg');
	static readonly INSTAGRAM = new LinkKind(
		'INSTAGRAM',
		'Instagram',
		'/assets/img/icon/instagram.svg'
	);
	static readonly TWITTER = new LinkKind('TWITTER', 'Twitter', '/assets/img/icon/twitter.svg');
	static readonly FACEBOOK = new LinkKind(
		'FACEBOOK',
		'Facebook',
		'/assets/img/icon/facebook.svg'
	);
	static readonly BANDCAMP = new LinkKind(
		'BANDCAMP',
		'Bandcamp',
		'/assets/img/icon/bandcamp.svg'
	);
	static readonly WEBSITE = new LinkKind('WEBSITE', 'Website', '/assets/img/icon/website.svg');

	constructor(private readonly key: string, public name: string, public icon: string) {}

	toString() {
		return this.key;
	}
}

type LinkList = {
	[key in keyof Partial<typeof LinkKind>]: Link;
};

export { Link, LinkKind, type LinkList};