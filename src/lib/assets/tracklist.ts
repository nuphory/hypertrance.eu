import {musicians} from '$lib/assets/artists';
import type { Artist } from '$lib/types/artist';
import type { LinkList } from '$lib/types/link';

type Track = {
	title: string;
	artists: (Artist | undefined)[];
	links: LinkList;
};

export const tracklist: Track[] = [
	{
		title: 'HYPERTRANCE',
		artists: [musicians.NUPHORY],
		links: {}
	},
	{
		title: 'everafter',
		artists: [musicians.WYSTE],
		links: {}
	},
	{
		title: 'infinity',
		artists: [musicians.AEKAE],
		links: {}
	},
	{
		title: 'digital eternity',
		artists: [musicians.YUUNI, musicians.AEKAE],

		links: {}
	},
	{
		title: 'Myria Exaxis',
		artists: [musicians.TYPE_R],
		links: {}
	},
	{
		title: 'EXOPLANET // HYPERTRANCE',
		artists: [musicians.NUPHORY, musicians.LUNA_LENTA],
		links: {}
	},
	{
		title: 'Carry All Before One',
		artists: [musicians.LURE_RABBIT, musicians.NAIMENG],
		links: {}
	},
	{
		title: 'Ghost Wire',
		artists: [musicians.CRAYVXN],
		links: {}
	},
	{
		title: 'Infinite Evolution',
		artists: [musicians.NEUROLINK],
		links: {}
	},
	{
		title: 'through the forest',
		artists: [musicians.VOXKAI],
		links: {}
	},
	{
		title: 'dryft:current',
		artists: [musicians.KASSIO_PROJECT],
		links: {}
	},
	{
		title: 'Wait For Me',
		artists: [musicians.D4VT0R],
		links: {}
	},
	{
		title: 'REJECTED BY HYPERTRANCE',
		artists: [musicians.STILL_CRISP],
		links: {}
	},
	{
		title: 'ask the universe',
		artists: [musicians.GASKER],
		links: {}
	},
	{
		title: 'SSR05',
		artists: [musicians.MOSHII_LIGHTZ],
		links: {}
	},
	{
		title: 'I NEED',
		artists: [musicians.C_ZER],
		links: {}
	},
	{
		title: 'STEP10',
		artists: [musicians.SAM_WAITIN],
		links: {}
	},
	{
		title: 'Moon Shine',
		artists: [musicians.LUNANESCENCE, musicians.LUNA_LENTA],
		links: {}
	},
	{
		title: 'juju stomp',
		artists: [musicians.DISCTR4K],
		links: {}
	},
	{
		title: 'Twilight',
		artists: [musicians.AUSA],
		links: {}
	},
	{
		title: 'soul vertex',
		artists: [musicians.NOAH_B],
		links: {}
	}
];

export default tracklist;
