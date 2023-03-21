/**
 * a social media platform
 */
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
	static readonly FORIIO = new Platform('Facebook', '/assets/img/icon/facebook.svg', 430);

	// Art platforms
	static readonly NEWGROUNDS = new Platform('Newgrounds', '/assets/img/icon/website.svg', 500);
	static readonly DEVIANT_ART = new Platform('DeviantArt', '/assets/img/icon/website.svg', 510);
	static readonly TUMBLR = new Platform('Tumblr', '/assets/img/icon/website.svg', 520);
	
        // Subscription platforms
        static readonly PATREON = new Platform('Patreon', '/assets/img/icon/website.svg', 600);

	readonly name: string;
	readonly iconSrc: string;
	readonly priority: number;

	/**
	 * a social media platform
	 * @param name the name of the platform
	 * @param iconSrc the path to the icon of the platform
	 * @param priority the priority of where the platform should appear in a list
	 */
	constructor(name: string, iconSrc: string, priority?: number) {
		this.name = name;
		this.iconSrc = iconSrc;
		this.priority = priority ?? 0;
	}

        toString() {
		return this.name;
	}
}

/**
 * a link to a user on a social media platform
 */
class Link extends Platform {
	readonly url: string;

	/**
	 * a link, including a url, an icon and a name
	 * @param url the url of the link
	 * @param platform the platform the link is for
	 * @param options some options for the link
	 */
	constructor(url: string, name?: string, iconSrc?: string, priority?: number) {
		super(
			name ?? Platform.WEBSITE.name,
			iconSrc ?? Platform.WEBSITE.iconSrc,
			priority ?? Platform.WEBSITE.priority
		);

		this.url = url;
	}

	toString() {
		return this.name + ': ' + this.url;
	}
}

class LinkBuilder {
	private url?: string;
	private name?: string;
	private iconSrc?: string;
	private priority?: number;

	constructor(
		options?: {
			url?: string;
			platform?: Platform;
			name?: string;
			iconSrc?: string;
			priority?: number;
		},
		link?: Link
	) {
		this.url = options?.url;
		this.name = options?.name;
		this.iconSrc = options?.iconSrc;
		this.priority = options?.priority;

		if (link) this.fromLink(link);
	}

	fromLink(link: Link): LinkBuilder {
		this.url = link.url;
		this.name = link.name;
		this.iconSrc = link.iconSrc;
		this.priority = link.priority;
		return this;
	}

	setUrl(url: string): LinkBuilder {
		this.url = url;
		return this;
	}

	setPlatform(platform: Platform): LinkBuilder {
		this.name = platform.name;
		this.iconSrc = platform.iconSrc;
		this.priority = platform.priority;
		return this;
	}

	setName(name: string): LinkBuilder {
		this.name = name;
		return this;
	}

	setIconSrc(iconSrc: string): LinkBuilder {
		this.iconSrc = iconSrc;
		return this;
	}

	setPriority(priority: number): LinkBuilder {
		this.priority = priority;
		return this;
	}

	build(): Link {
		if (!this.url) throw new TypeError('A url is required to build a valid link');

		return new Link(this.url, this.name, this.iconSrc, this.priority);
	}

	create = this.build;
	make = this.build;
}

// class LinkMap extends Map<string, Link> {
// 	/**
// 	 * @param links a double array of links, where the first element is the key and the second element is the value
// 	 */
// 	constructor(links?: [string, Link][]) {
// 		super(links);
// 	}
// }

export { Platform, type Link, LinkBuilder };
