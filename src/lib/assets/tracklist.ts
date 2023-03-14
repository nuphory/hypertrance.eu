import artists, { type Artist, type Link } from '$lib/assets/artists';

type Track = {
	title: string;
	artists: (Artist | undefined)[];
	links: Link[];
};

export const tracklist: Track[] = [
	{
		title: 'HYPERTRANCE',
		artists: [artists.find((artist) => artist.name.toLowerCase() === 'nuphory')],
		links: []
	},
	{
		title: 'everafter',
		artists: [artists.find((artist) => artist.name.toLowerCase() === 'wyste')],
		links: []
	},
	{
		title: 'infinity',
		artists: [artists.find((artist) => artist.name.toLowerCase() === 'aekae')],
		links: []
	},
	{
		title: 'digital eternity',
		artists: [
			artists.find((artist) => artist.name.toLowerCase() === 'yuuni'),
			artists.find((artist) => artist.name.toLowerCase() === 'aekae')
		],

		links: []
	},
	{
		title: 'Myria Exaxis',
		artists: [artists.find((artist) => artist.name.toLowerCase() === 'type r')],
		links: []
	},
	{
		title: 'EXOPLANET // HYPERTRANCE',
		artists: [
			artists.find((artist) => artist.name.toLowerCase() === 'nuphory'),
			artists.find((artist) => artist.name.toLowerCase() === 'luna lenta')
		],
		links: []
	},
	{
		title: 'Carry All Before One v2',
		artists: [
			artists.find((artist) => artist.name.toLowerCase() === 'lure rabbit'),
			artists.find((artist) => artist.name.toLowerCase() === 'naimeng')
		],
		links: []
	},
	{
		title: 'Ghost Wire',
		artists: [artists.find((artist) => artist.name.toLowerCase() === 'crayvxn')],
		links: []
	},
	{
		title: 'Infinite Evolution',
		artists: [artists.find((artist) => artist.name.toLowerCase() === 'neurolink')],
		links: []
	},
	{
		title: 'through the forest',
		artists: [artists.find((artist) => artist.name.toLowerCase() === 'voxkai')],
		links: []
	},
	{
		title: 'dryft:current',
		artists: [artists.find((artist) => artist.name.toLowerCase() === 'kassio project')],
		links: []
	},
	{
		title: 'Wait For Me',
		artists: [artists.find((artist) => artist.name.toLowerCase() === 'd4vt0r')],
		links: []
	},
	{
		title: 'REJECTED BY HYPERTRANCE',
		artists: [artists.find((artist) => artist.name.toLowerCase() === 'still crisp')],
		links: []
	},
	{
		title: 'ask the universe',
		artists: [artists.find((artist) => artist.name.toLowerCase() === 'gasker')],
		links: []
	},
	{
		title: 'SSR05',
		artists: [artists.find((artist) => artist.name.toLowerCase() === 'moshii lightz')],
		links: []
	},
	{
		title: 'I NEED',
		artists: [artists.find((artist) => artist.name.toLowerCase() === 'c-zer')],
		links: []
	},
	{
		title: 'STEP10',
		artists: [artists.find((artist) => artist.name.toLowerCase() === 'sam waitin')],
		links: []
	},
	{
		title: 'Moon Shine',
		artists: [
			artists.find((artist) => artist.name.toLowerCase() === 'lunanescence'),
			artists.find((artist) => artist.name.toLowerCase() === 'luna lenta')
		],
		links: []
	},
	{
		title: 'juju stomp',
		artists: [artists.find((artist) => artist.name.toLowerCase() === 'disctr4k')],
		links: []
	},
	{
		title: 'Twilight',
		artists: [artists.find((artist) => artist.name.toLowerCase() === 'ausa')],
		links: []
	},
	{
		title: 'soul vertex',
		artists: [artists.find((artist) => artist.name.toLowerCase() === 'noah b')],
		links: []
	}
];

export default tracklist;
