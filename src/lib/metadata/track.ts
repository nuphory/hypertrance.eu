import type { Artist } from '$lib/metadata/artist';
import type { Link } from '$lib/metadata/link';

/**
 * a track featured on any hypertrance album
 */
class Track {
	readonly title: string;
	readonly primaryArtists: Artist[];
	readonly featuredArtists?: Artist[];
	readonly visualArtists?: Artist[];
	readonly audioSrc?: string;
	readonly bpm?: number;
	readonly key?: string;
	readonly links?: Link[];
	readonly formattedString: string;

	constructor(
		title: string,
		primaryArtists: Artist[],
		featuredArtists?: Artist[],
		visualArtists?: Artist[],
		audioSrc?: string,
		bpm?: number,
		key?: string,

		links?: Link[]
	) {
		this.title = title;
		this.primaryArtists = primaryArtists;
		this.featuredArtists = featuredArtists;
		this.visualArtists = visualArtists;
		this.audioSrc = audioSrc;
		this.bpm = bpm;
		this.key = key;

		this.links = links;

		this.formattedString = this.toString();
	}

	toString() {
		return (
			this.primaryArtists.map((artist) => artist.name).join(', ') +
			' - ' +
			this.title +
			(this.featuredArtists
				? '(feat. ' + this.featuredArtists.map((artist) => artist.name).join(', ') + ')'
				: '')
		);
	}
}

class TrackBuilder {
	private title?: string;
	private primaryArtists?: Artist[];
	private featuredArtists?: Artist[];
	private visualArtists?: Artist[];
	private audioSrc?: string;
	private bpm?: number;
	private key?: string;
	private links?: Link[];

	constructor(
		options?: {
			title?: string;
			primaryArtists?: Artist[];
			featuredArtists?: Artist[];
			visualArtists?: Artist[];
			audioSrc?: string;
			bpm?: number;
			key?: string;
			links?: Link[];
		},
		track?: Track
	) {
		this.title = options?.title;
		this.primaryArtists = options?.primaryArtists;
		this.visualArtists = options?.featuredArtists;
		this.audioSrc = options?.audioSrc;
		this.bpm = options?.bpm;
		this.key = options?.key;
		this.links = options?.links;

		if (track) this.fromTrack(track);
	}

	fromTrack(track: Track): TrackBuilder {
		this.title = track.title;
		this.primaryArtists = track.primaryArtists;
		this.visualArtists = track.featuredArtists;
		this.bpm = track.bpm;
		this.key = track.key;
		this.links = track.links;
		return this;
	}

	setTitle(title: string): TrackBuilder {
		this.title = title;
		return this;
	}

	setPrimaryArtists(primaryArtists: Artist[]): TrackBuilder {
		this.primaryArtists = primaryArtists;
		return this;
	}

	addPrimaryArtist(artist: Artist): TrackBuilder {
		if (this.primaryArtists) {
			this.primaryArtists.push(artist);
		} else {
			this.primaryArtists = [artist];
		}
		return this;
	}

	setFeaturedArtists(featuredArtists: Artist[]): TrackBuilder {
		this.featuredArtists = featuredArtists;
		return this;
	}

	addFeaturedArtist(artist: Artist): TrackBuilder {
		if (this.featuredArtists) {
			this.featuredArtists.push(artist);
		} else {
			this.featuredArtists = [artist];
		}
		return this;
	}

	setVisualArtists(visualArtists: Artist[]): TrackBuilder {
		this.visualArtists = visualArtists;
		return this;
	}

	addVisualArtist(artist: Artist): TrackBuilder {
		if (this.visualArtists) {
			this.visualArtists.push(artist);
		} else {
			this.visualArtists = [artist];
		}
		return this;
	}

	setAudioSrc(src: string): TrackBuilder {
		this.audioSrc = src;
		return this;
	}

	setBpm(bpm: number): TrackBuilder {
		this.bpm = bpm;
		return this;
	}

	setKey(key: string): TrackBuilder {
		this.key = key;
		return this;
	}

	setLinks(links: Link[]): TrackBuilder {
		this.links = links;
		return this;
	}

	addLink(link: Link): TrackBuilder {
		if (this.links) {
			this.links.push(link);
		} else {
			this.links = [link];
		}
		return this;
	}

	build(): Track {
		if (!this.title) throw new TypeError('A track title is required to build a valid Track');
		if (!this.primaryArtists)
			throw new TypeError('At least one primary artist is required to build a valid Track');

		if (Array.isArray(this.links)) {
			this.links.sort((a, b) => a.priority - b.priority);
		}

		return new Track(
			this.title,
			this.primaryArtists,
			this.featuredArtists,
			this.visualArtists,
			this.audioSrc,
			this.bpm,
			this.key,
			this.links
		);
	}

	create = this.build;
	make = this.build;
}

type TrackList = Array<Track>;

export { type Track, type TrackList, TrackBuilder };
