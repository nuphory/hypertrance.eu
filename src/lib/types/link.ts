class Platform {
	static readonly WEBSITE = new Platform('Website', '/assets/img/icon/website.svg', 100);

	// Music streaming platforms
	static readonly BANDCAMP = new Platform('Bandcamp', '/assets/img/icon/bandcamp.svg', 200);
	static readonly SPOTIFY = new Platform('Spotify', '/assets/img/icon/spotify.svg', 210);
	static readonly SOUNDCLOUD = new Platform('SoundCloud', '/assets/img/icon/soundcloud.svg', 220);
	static readonly APPLE_MUSIC = new Platform(
		'Apple Music',
		'/assets/img/icon/apple_music.svg',
		230
	);
	static readonly YOUTUBE_MUSIC = new Platform(
		'YouTube Music',
		'/assets/img/icon/apple_music.svg',
		240
	);
	static readonly TIDAL = new Platform('Tidal', '/assets/img/icon/website.svg', 250);
	static readonly DEEZER = new Platform('Deezer', '/assets/img/icon/website.svg', 260);
	static readonly AMAZON_MUSIC = new Platform('Amazon Music', '/assets/img/icon/website.svg', 270);
	static readonly TIKTOK_AUDIO = new Platform(
		'TikTok Audio',
		'/assets/img/icon/soundcloud.svg',
		280
	);

	// Video streaming platforms
	static readonly YOUTUBE = new Platform('YouTube', '/assets/img/icon/youtube.svg', 300);
	static readonly TIKTOK = new Platform('TikTok', '/assets/img/icon/youtube.svg', 310);
	static readonly TWITCH = new Platform('Twitch', '/assets/img/icon/twitch.svg', 320);
	static readonly VIMEO = new Platform('Vimeo', '/assets/img/icon/website.svg', 330);

	// Social media platforms
	static readonly INSTAGRAM = new Platform('Instagram', '/assets/img/icon/instagram.svg', 400);
	static readonly TWITTER = new Platform('Twitter', '/assets/img/icon/twitter.svg', 410);
	static readonly FACEBOOK = new Platform('Facebook', '/assets/img/icon/facebook.svg', 420);

	// Art platforms
	static readonly NEWGROUNDS = new Platform('Newgrounds', '/assets/img/icon/website.svg', 500);
	static readonly TUMBLR = new Platform('Tumblr', '/assets/img/icon/website.svg', 510);
	static readonly DEVIANT_ART = new Platform('DeviantArt', '/assets/img/icon/website.svg', 520);

	private _name: string;
	private _iconSrc: string;
	private _priority: number;

	constructor(name: string, iconSrc: string, priority?: number) {
		this._name = name;
		this._iconSrc = iconSrc;
		this._priority = priority ?? 0;
	}

	get name() {
		return this._name;
	}

	get iconSrc() {
		return this._iconSrc;
	}

	get priority() {
		return this._priority;
	}
}

/**
 * a link to a user on a social media platform
 */
class Link extends Platform {
	private _url: string;

	private _platform: Platform;

	constructor(
		platform: Platform,
		url: string,
		options?: { name?: string; iconSrc?: string; priority?: number }
	) {
		super(
			options?.name ?? platform.name,
			options?.iconSrc ?? platform.iconSrc,
			options?.priority ?? platform.priority
		);

		this._url = url;
		this._platform = platform;
	}

	get url() {
		return this._url;
	}

	get platform() {
		return this._platform;
	}

	toString() {
		return this.url;
	}
}

type LinkList = {
	[key in keyof Partial<typeof Platform>]: Link;
};

export { Link, Platform, type LinkList };
