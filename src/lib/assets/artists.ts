import type { Artist } from '$lib/types/artist';
import { Link, LinkKind } from '$lib/types/link';

const musicians: {
	[key: string]: Artist;
} = {
	NUPHORY: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/nuphory'),
			SPOTIFY: new Link(LinkKind.SPOTIFY, 'https://open.spotify.com/artist/2K0uRwlc2VKeRoWS8Iuija'),
			APPLE_MUSIC: new Link(
				LinkKind.APPLE_MUSIC,
				'https://music.apple.com/us/artist/nuphory/1638776851'
			),
			TWITCH: new Link(LinkKind.TWITCH, 'https://twitch.tv/nuphory'),
			YOUTUBE: new Link(LinkKind.YOUTUBE, 'https://www.youtube.com/nuphory'),
			INSTAGRAM: new Link(LinkKind.INSTAGRAM, 'https://www.instagram.com/nuphory/'),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/nuphory'),
			FACEBOOK: new Link(LinkKind.FACEBOOK, 'https://www.facebook.com/nuphory'),
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://nuphory.bandcamp.com/'),
			WEBSITE: new Link(LinkKind.WEBSITE, 'https://nuphory.com/')
		},
		name: 'nuphory'
	},
	AEKAE: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/aekaemusic'),
			SPOTIFY: new Link(LinkKind.SPOTIFY, 'https://open.spotify.com/artist/2YXVRXrYHVJrC5P1eTGYSu'),
			APPLE_MUSIC: new Link(
				LinkKind.APPLE_MUSIC,
				'https://music.apple.com/us/artist/aekae/1545741130'
			),
			TWITCH: new Link(LinkKind.TWITCH, 'https://twitch.tv/aekaemusic'),
			YOUTUBE: new Link(LinkKind.YOUTUBE, 'https://www.youtube.com/@aekaemusic'),
			INSTAGRAM: new Link(LinkKind.INSTAGRAM, 'https://www.instagram.com/aekaemusic/'),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/aekaemusic'),
			FACEBOOK: new Link(LinkKind.FACEBOOK, 'https://www.facebook.com/aekaemusic'),
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://aekae.bandcamp.com')
		},
		name: 'Aekae'
	},
	NOAH_B: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/thisisnoahb'),
			SPOTIFY: new Link(LinkKind.SPOTIFY, 'https://open.spotify.com/artist/4F4w1Gkfja6wPJzuMKCLmk'),
			APPLE_MUSIC: new Link(
				LinkKind.APPLE_MUSIC,
				'https://music.apple.com/us/artist/noah-b/1071519331'
			),
			TWITCH: new Link(LinkKind.TWITCH, 'https://www.twitch.tv/thisisnoahb'),
			INSTAGRAM: new Link(LinkKind.INSTAGRAM, 'https://www.instagram.com/_thisisnoahb/'),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/thisisnoahb'),
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://thisisnoahb.bandcamp.com/')
		},
		name: 'Noah B'
	},
	GASKER: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/gasker'),
			TWITCH: new Link(LinkKind.TWITCH, 'https://www.twitch.tv/gaskerbpm'),
			YOUTUBE: new Link(LinkKind.YOUTUBE, 'https://www.youtube.com/@gaskerbpm'),
			INSTAGRAM: new Link(LinkKind.INSTAGRAM, 'https://www.instagram.com/gaskerbpm/'),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/Gasker8')
		},
		name: 'Gasker'
	},
	DISCTR4K: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/disctr4k'),
			SPOTIFY: new Link(LinkKind.SPOTIFY, 'https://open.spotify.com/artist/05ksHwXiCA9qt1bV1nN8F7'),
			APPLE_MUSIC: new Link(
				LinkKind.APPLE_MUSIC,
				'https://music.apple.com/us/artist/disctr4k/1554665449'
			),
			YOUTUBE: new Link(LinkKind.YOUTUBE, 'https://www.youtube.com/@disctr4k'),
			INSTAGRAM: new Link(LinkKind.INSTAGRAM, 'https://www.instagram.com/disctr4k/'),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/disctr4k'),
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://disctr4k.bandcamp.com/')
		},
		name: 'disctr4k'
	},
	LUNANESCENCE: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/lunanescence'),
			SPOTIFY: new Link(LinkKind.SPOTIFY, 'https://open.spotify.com/artist/4kwmsmcjqgP2QcSzMTuDLL'),
			APPLE_MUSIC: new Link(
				LinkKind.APPLE_MUSIC,
				'https://music.apple.com/us/artist/lunanescence/1570829354'
			),
			TWITCH: new Link(LinkKind.TWITCH, 'https://www.twitch.tv/lunanesence_'),
			INSTAGRAM: new Link(LinkKind.INSTAGRAM, 'https://www.instagram.com/lunanescence_official/'),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/lunanescence'),
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://lunanescence.bandcamp.com/')
		},
		name: 'Lunanescence'
	},
	TYPE_R: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/hiimtype_r'),
			SPOTIFY: new Link(LinkKind.SPOTIFY, 'https://open.spotify.com/artist/15guHFW3ZQDoaWttbI2IRp'),
			TWITCH: new Link(LinkKind.TWITCH, 'https://twitch.tv/type_rrr'),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/imTYPE_R'),
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://type-r.bandcamp.com/')
		},
		name: 'Type R'
	},
	YUUNI: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/yuunimoosic'),
			SPOTIFY: new Link(LinkKind.SPOTIFY, 'https://open.spotify.com/artist/2x7yh8Cj6IPMk46qjsZdLW'),
			APPLE_MUSIC: new Link(
				LinkKind.APPLE_MUSIC,
				'https://music.apple.com/us/artist/yuuni/1650439511'
			),
			TWITCH: new Link(LinkKind.TWITCH, 'https://www.twitch.tv/yuuniosu'),
			YOUTUBE: new Link(LinkKind.YOUTUBE, 'https://www.youtube.com/@yuunimoosic'),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/yuunimoosic'),
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://yuuni.bandcamp.com/')
		},
		name: 'yuuni'
	},
	WYSTE: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/wyste'),
			TWITCH: new Link(LinkKind.TWITCH, 'https://www.twitch.tv/wystemusic'),
			YOUTUBE: new Link(LinkKind.YOUTUBE, 'https://www.youtube.com/@wystemusic'),
			INSTAGRAM: new Link(LinkKind.INSTAGRAM, 'https://www.instagram.com/_wyste/'),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/_wyste'),
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://wyste.bandcamp.com/')
		},
		name: 'wyste'
	},
	D4VT0R: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/d4vt0r'),
			YOUTUBE: new Link(LinkKind.YOUTUBE, 'https://www.youtube.com/@D4VT0R'),
			INSTAGRAM: new Link(LinkKind.INSTAGRAM, 'https://www.instagram.com/d4vt0r/'),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/D4VT0R_'),
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://d4vt0r.bandcamp.com/')
		},
		name: 'D4VT0R'
	},
	SAM_WAITIN: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/samwaitin'),
			SPOTIFY: new Link(LinkKind.SPOTIFY, 'https://open.spotify.com/artist/4fUt1H64XAKDyYNRqUYzPG'),
			APPLE_MUSIC: new Link(
				LinkKind.APPLE_MUSIC,
				'https://music.apple.com/us/artist/sam-waitin/1579494907'
			),
			INSTAGRAM: new Link(LinkKind.INSTAGRAM, 'https://www.instagram.com/samwaitin/'),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/sam_waitin'),
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://samwaitin.bandcamp.com/')
		},
		name: 'SAM WAITIN'
	},
	LURE_RABBIT: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/lurerabbit'),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/rabbit_lure')
		},
		name: 'Lure Rabbit'
	},
	NAIMENG: {
		name: 'NaiMeng'
	},
	LUNA_LENTA: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/lunalenta'),
			SPOTIFY: new Link(LinkKind.SPOTIFY, 'https://open.spotify.com/artist/36un9X6TbRfeYAMadbI2SN'),
			TWITCH: new Link(LinkKind.TWITCH, 'https://www.twitch.tv/lunalenta'),
			INSTAGRAM: new Link(LinkKind.INSTAGRAM, 'https://www.instagram.com/lunalenta_ht/'),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/luna_lenta'),
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://lunalenta.bandcamp.com/')
		},
		name: 'Luna Lenta'
	},
	VOXKAI: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/voxkai'),
			SPOTIFY: new Link(LinkKind.SPOTIFY, 'https://open.spotify.com/artist/3IKcTlbewbdMVkmUNimaQ0'),
			APPLE_MUSIC: new Link(
				LinkKind.APPLE_MUSIC,
				'https://music.apple.com/us/artist/voxkai/1518828664'
			),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/voxkai_'),
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://voxkai.bandcamp.com/')
		},
		name: 'voxkai'
	},
	C_ZER: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/thisisczer'),
			SPOTIFY: new Link(LinkKind.SPOTIFY, 'https://open.spotify.com/artist/2PpGIcLGdpUVBwKGXLztTm'),
			APPLE_MUSIC: new Link(
				LinkKind.APPLE_MUSIC,
				'https://music.apple.com/us/artist/c-zer/1630210572'
			),
			TWITCH: new Link(LinkKind.TWITCH, 'https://twitch.tv/thisisczer'),
			INSTAGRAM: new Link(LinkKind.INSTAGRAM, 'https://www.instagram.com/thisisczer/'),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/thisisczer'),
			FACEBOOK: new Link(LinkKind.FACEBOOK, 'https://www.facebook.com/thisisczer'),
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://thisisczer.bandcamp.com/')
		},
		name: 'C-ZER'
	},
	KASSIO_PROJECT: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/kassio-971255094'),
			SPOTIFY: new Link(LinkKind.SPOTIFY, 'https://open.spotify.com/artist/16Bu6VLyQePdnxIUqVNzRi'),
			APPLE_MUSIC: new Link(
				LinkKind.APPLE_MUSIC,
				'https://music.apple.com/us/artist/kassio/1546480656'
			),
			YOUTUBE: new Link(LinkKind.YOUTUBE, 'https://www.youtube.com/@kassioproject'),
			INSTAGRAM: new Link(LinkKind.INSTAGRAM, 'https://www.instagram.com/kassio_project/'),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/kassioproject'),
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://kassiomusic.bandcamp.com/')
		},
		name: 'Kassio Project'
	},
	CRAYVXN: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/crayvxn'),
			SPOTIFY: new Link(LinkKind.SPOTIFY, 'https://open.spotify.com/artist/1GkulgH4pDrPg8EpIHI2hg'),
			YOUTUBE: new Link(LinkKind.YOUTUBE, 'https://www.youtube.com/@crayvxn'),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/crayvxn'),
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://crayvxn.bandcamp.com/')
		},
		name: 'crayvxn'
	},
	MOSHII_LIGHTZ: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/moshii-lightz'),
			TWITCH: new Link(LinkKind.TWITCH, 'https://www.twitch.tv/moshii_lightz'),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/MoshiiLightz'),
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://moshiilightz.bandcamp.com/')
		},
		name: 'MOSHII LIGHTZ'
	},
	NEUROLINK: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/neurolinkmusic'),
			SPOTIFY: new Link(LinkKind.SPOTIFY, 'https://open.spotify.com/artist/5Gup0O4o66XeN4PubuVFOS'),
			TWITCH: new Link(LinkKind.TWITCH, 'https://www.twitch.tv/neurolinkmusic'),
			YOUTUBE: new Link(LinkKind.YOUTUBE, 'https://www.youtube.com/@neurolink704'),
			INSTAGRAM: new Link(LinkKind.INSTAGRAM, 'https://www.instagram.com/neurolink_music/'),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/neurolink_dnb')
		},
		name: 'Neurolink'
	},
	AUSA: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/ausamusicofficial'),
			SPOTIFY: new Link(LinkKind.SPOTIFY, 'https://open.spotify.com/artist/1mBXHykqQ0zTJafC86uBgO'),
			APPLE_MUSIC: new Link(
				LinkKind.APPLE_MUSIC,
				'https://music.apple.com/us/artist/ausa/1533581292'
			),
			TWITCH: new Link(LinkKind.TWITCH, 'https://twitch.tv/ausaofficial'),
			YOUTUBE: new Link(LinkKind.YOUTUBE, 'https://www.youtube.com/@ausamusicofficial'),
			INSTAGRAM: new Link(LinkKind.INSTAGRAM, 'https://www.instagram.com/__ausa__'),
			FACEBOOK: new Link(LinkKind.FACEBOOK, 'https://www.facebook.com/ausaMusicOfficial'),
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://ausaofficial.bandcamp.com/')
		},
		name: 'AUSA'
	},
	STILL_CRISP: {
		links: {
			SOUNDCLOUD: new Link(LinkKind.SOUNDCLOUD, 'https://soundcloud.com/stillcrisp'),
			SPOTIFY: new Link(LinkKind.SPOTIFY, 'https://open.spotify.com/artist/7I0omdF0bBVakabsP93fJA'),
			APPLE_MUSIC: new Link(
				LinkKind.APPLE_MUSIC,
				'https://music.apple.com/us/artist/still-crisp/1537379112'
			),
			TWITCH: new Link(LinkKind.TWITCH, 'https://twitch.tv/stillcrisp'),
			YOUTUBE: new Link(LinkKind.YOUTUBE, 'https://www.youtube.com/@stillcrisp9106'),
			TWITTER: new Link(LinkKind.TWITTER, 'https://twitter.com/still_crisp'),
			BANDCAMP: new Link(LinkKind.BANDCAMP, 'https://stillcrisp.bandcamp.com/')
		},
		name: 'still crisp'
	}
};

const visualArtists: {
	[key: string]: Artist;
} = {};

const artists: { [key: string]: Artist } = {
	...musicians,
	...visualArtists
};

export default artists;
export { musicians, visualArtists };
