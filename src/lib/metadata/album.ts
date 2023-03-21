import type { Track, TrackList } from '$lib/metadata/track';
import type { Link } from '$lib/metadata/link';
import type { Artist } from '$lib/metadata/artist';

class Album {
	readonly title: string;
	readonly albumArtists: Artist[];
	readonly trackList: TrackList;
	readonly releaseDate?: Date;
	readonly label?: string = 'hypertrance'; // TODO label data type?
	readonly links?: Link[];

	constructor(
		title: string,
		artist: Artist[],
		trackList: TrackList,
		label?: string,
		links?: Link[]
	) {
		this.title = title;
		this.albumArtists = artist;
		this.trackList = trackList;
		this.label = label;
		this.links = links;
	}

	toString() {
		return (
			this.albumArtists.map((artist) => artist.name).join(', ') +
			' - ' +
			this.title +
			' (' +
			this.releaseDate?.getFullYear() +
			')'
		);
	}
}

class AlbumBuilder {
	private title?: string;
	private albumArtists?: Artist[];
	private trackList: TrackList = [];
	private releaseDate?: Date;
	private label?: string;
	private links?: Link[];

	constructor(
		options?: {
			title?: string;
			albumArtists?: Artist[];
			trackList?: TrackList;
			releaseDate?: Date;
			label?: string;
			links?: Link[];
		},
		album?: Album
	) {
		this.title = options?.title;
		this.albumArtists = options?.albumArtists;
		this.trackList = options?.trackList ?? [];
		this.releaseDate = options?.releaseDate;
		this.label = options?.label;
		this.links = options?.links;

		if (album) this.fromAlbum(album);
	}

	fromAlbum(album: Album): AlbumBuilder {
		this.title = album.title;
		this.albumArtists = album.albumArtists;
		this.label = album.label;
		this.links = album.links;
		return this;
	}

	setTitle(title: string): AlbumBuilder {
		this.title = title;
		return this;
	}

	setAlbumArtists(artists: Artist[]): AlbumBuilder {
		this.albumArtists = artists;
		return this;
	}

	addAlbumArtist(artist: Artist): AlbumBuilder {
		if (this.albumArtists) {
			this.albumArtists.push(artist);
		} else {
			this.albumArtists = [artist];
		}
		return this;
	}

	setTracks(trackList: TrackList): AlbumBuilder {
		this.trackList = trackList;
		return this;
	}

	addTrack(track: Track): AlbumBuilder {
		this.trackList.push(track);
		return this;
	}

	setReleaseDate(releaseDate: Date): AlbumBuilder {
		this.releaseDate = releaseDate;
		return this;
	}

	setLinks(links: Link[]): AlbumBuilder {
		this.links = links;
		return this;
	}

	addLink(link: Link): AlbumBuilder {
		if (this.links) {
			this.links.push(link);
		} else {
			this.links = [link];
		}
		return this;
	}

	build(): Album {
		if (!this.title) throw new TypeError('A title is required to build a valid Album');
		if (!this.albumArtists)
			throw new TypeError('At least one album artist is required to build a valid Track');
		if (!this.trackList)
			throw new TypeError('At least one track is required to build a valid Album');

		if (Array.isArray(this.links)) {
			this.links.sort((a, b) => a.priority - b.priority);
		}

		return new Album(this.title, this.albumArtists, this.trackList, this.label, this.links);
	}

	create = this.build;
	make = this.build;
}

export { type Album, AlbumBuilder };
