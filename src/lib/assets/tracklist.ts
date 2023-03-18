import { musicians } from '$lib/assets/artists';
import type { Artist } from '$lib/types/artist';
import { Link, LinkKind, type LinkList } from '$lib/types/link';

type Track = {
	title: string;
	artists: (Artist | undefined)[];
	links: LinkList;
};

export const tracklist: Track[] = [
	{
		title: 'HYPERTRANCE',
		artists: [musicians.NUPHORY],
		links: {
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://hypertrance.bandcamp.com/track/hypertrance')
		}
	},
	{
		title: 'EverAfter',
		artists: [musicians.WYSTE],
		links: {
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://hypertrance.bandcamp.com/track/everafter')
		}
	},
	{
		title: 'Infinity',
		artists: [musicians.AEKAE],
		links: {
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://hypertrance.bandcamp.com/track/infinity')
		}
	},
	{
		title: 'Digital Eternity',
		artists: [musicians.YUUNI, musicians.AEKAE],

		links: {
			BANDCAMP: new Link(
				LinkKind.BANDCAMP,
				'https://hypertrance.bandcamp.com/track/digital-eternity'
			)
		}
	},
	{
		title: 'Myria Exaxis',
		artists: [musicians.TYPE_R],
		links: {
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://hypertrance.bandcamp.com/track/myria-exaxis')
		}
	},
	{
		title: 'EXOPLANET // HYPERTRANCE',
		artists: [musicians.NUPHORY, musicians.LUNA_LENTA],
		links: {
			BANDCAMP: new Link(
				LinkKind.BANDCAMP,
				'https://hypertrance.bandcamp.com/track/exoplanet-hypertrance'
			)
		}
	},
	{
		title: 'Carry All Before One',
		artists: [musicians.LURE_RABBIT, musicians.NAIMENG],
		links: {
			BANDCAMP: new Link(
				LinkKind.BANDCAMP,
				'https://hypertrance.bandcamp.com/track/carry-all-before-one'
			)
		}
	},
	{
		title: 'Ghost Wire',
		artists: [musicians.CRAYVXN],
		links: {
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://hypertrance.bandcamp.com/track/ghost-wire')
		}
	},
	{
		title: 'Infinite Evolution',
		artists: [musicians.NEUROLINK],
		links: {
			BANDCAMP: new Link(
				LinkKind.BANDCAMP,
				'https://hypertrance.bandcamp.com/track/infinite-evolution'
			)
		}
	},
	{
		title: 'Through The Forest',
		artists: [musicians.VOXKAI],
		links: {
			BANDCAMP: new Link(
				LinkKind.BANDCAMP,
				'https://hypertrance.bandcamp.com/track/through-the-forest'
			)
		}
	},
	{
		title: 'Dryftcurrent',
		artists: [musicians.KASSIO_PROJECT],
		links: {
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://hypertrance.bandcamp.com/track/dryftcurrent')
		}
	},
	{
		title: 'Wait For Me',
		artists: [musicians.D4VT0R],
		links: {
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://hypertrance.bandcamp.com/track/wait-for-me')
		}
	},
	{
		title: 'REJECTEDBYHYPERTRANCE',
		artists: [musicians.STILL_CRISP],
		links: {
			BANDCAMP: new Link(
				LinkKind.BANDCAMP,
				'https://hypertrance.bandcamp.com/track/rejectedbyhypertrance'
			)
		}
	},
	{
		title: 'Ask The Universe',
		artists: [musicians.GASKER],
		links: {
			BANDCAMP: new Link(
				LinkKind.BANDCAMP,
				'https://hypertrance.bandcamp.com/track/ask-the-universe'
			)
		}
	},
	{
		title: 'SSR05',
		artists: [musicians.MOSHII_LIGHTZ],
		links: { BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://hypertrance.bandcamp.com/track/ssr05') }
	},
	{
		title: 'I NEED',
		artists: [musicians.C_ZER],
		links: {
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://hypertrance.bandcamp.com/track/i-need')
		}
	},
	{
		title: 'STEP10',
		artists: [musicians.SAM_WAITIN],
		links: {
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://hypertrance.bandcamp.com/track/step10')
		}
	},
	{
		title: 'Moon Shine',
		artists: [musicians.LUNANESCENCE, musicians.LUNA_LENTA],
		links: {
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://hypertrance.bandcamp.com/track/moon-shine')
		}
	},
	{
		title: 'juju stomp',
		artists: [musicians.DISCTR4K],
		links: {
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://hypertrance.bandcamp.com/track/juju-stomp')
		}
	},
	{
		title: 'Twilight',
		artists: [musicians.AUSA],
		links: {
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://hypertrance.bandcamp.com/track/twilight')
		}
	},
	{
		title: 'Soul Vertex',
		artists: [musicians.NOAH_B],
		links: {
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://hypertrance.bandcamp.com/track/soul-vertex')
		}
	}
];

export default tracklist;
