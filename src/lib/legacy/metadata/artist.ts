import type { Link } from '$src/lib/legacy/metadata/link';

const artists = new Set<Artist>();

/**
 * an Artist featured on any hypertrance media
 */
class Artist {
	readonly name: string;
	readonly biography?: string;
	readonly links?: Link[];

	/**
	 * an Artist featured on any hypertrance media
	 * @param _name stylized name of the artist
	 * @param _biography personalized biography of the artist
	 * @param _links list of links to the artist's social media
	 */
	constructor(name: string, biography?: string, links?: Link[]) {
		this.name = name;
		this.biography = biography;
		this.links = links;

		artists.add(this);
	}

	toString() {
		return this.name;
	}
}

/**
 * helper class to generate an Artist object through method chaining
 */
class ArtistBuilder {
	private name?: string;
	private biography?: string;
	private links?: Link[];

	/**
	 *
	 */
	constructor(options?: { name?: string; biography?: string; links?: Link[] }, artist?: Artist) {
		this.name = options?.name;
		this.biography = options?.biography;
		this.links = options?.links;

		if (artist) this.fromArtist(artist);
	}

	fromArtist(artist: Artist): ArtistBuilder {
		this.name = artist.name;
		this.biography = artist.biography;
		this.links = artist.links;
		return this;
	}

	setName(name: string): ArtistBuilder {
		this.name = name;
		return this;
	}

	setBiography(biography: string): ArtistBuilder {
		this.biography = biography;
		return this;
	}

	setLinks(links: Link[]): ArtistBuilder {
		this.links = links;
		return this;
	}

	addLink(link: Link): ArtistBuilder {
		if (this.links) {
			this.links.push(link);
		} else {
			this.links = [link];
		}
		return this;
	}

	build(): Artist {
		if (!this.name) throw TypeError('A name is required to build a valid Artist');

		if (Array.isArray(this.links)) {
			this.links.sort((a, b) => a.priority - b.priority);
		}

		return new Artist(this.name, this.biography, this.links);
	}

	create = this.build;
	make = this.build;
}

export { type Artist, ArtistBuilder };
export default artists;
