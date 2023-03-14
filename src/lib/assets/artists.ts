/**
 * Context comments:
 * # of Tracks on album,Track Title(s),Artist Name,,SoundCloud Link,,Spotify Link,,Apple Music Link,,Twitch Profile,,Youtube Profile,,Instagram Link,,Twitter Link,,Facebook Link,,Bandcamp Link,,Legal Name (composer credit),Country of Recording,Mixer Credit,EMAIL (for royalty splits),Invited to SplitShare,All systems go
 */

export type Artist = {
	name: string;
	links: Link[];
};

export type Link = {
	name:
		| 'soundcloud'
		| 'spotify'
		| 'applemusic'
		| 'twitch'
		| 'youtube'
		| 'instagram'
		| 'twitter'
		| 'facebook'
		| 'bandcamp'
		| 'website';
	url: string;
};

export const musicians: Artist[] = [
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/nuphory'
			},
			{
				name: 'spotify',
				url: 'https://open.spotify.com/artist/2K0uRwlc2VKeRoWS8Iuija?si=qfECieyUQ_ep5VPZpr8GHg'
			},
			{
				name: 'applemusic',
				url: 'https://music.apple.com/us/artist/nuphory/1638776851'
			},
			{
				name: 'twitch',
				url: 'https://twitch.tv/nuphory'
			},
			{
				name: 'youtube',
				url: 'https://www.youtube.com/nuphory'
			},
			{
				name: 'instagram',
				url: 'https://www.instagram.com/nuphory/'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/nuphory'
			},
			{
				name: 'facebook',
				url: 'https://www.facebook.com/nuphory'
			},
			{
				name: 'bandcamp',
				url: 'https://nuphory.bandcamp.com/'
			},
			{
				name: 'website',
				url: 'https://nuphory.com/'
			}
		],
		name: 'nuphory'
	},
	{
                links: [
                {
				name: 'soundcloud',
				url: 'https://soundcloud.com/aekaemusic'
			},
			{
				name: 'spotify',
				url: 'https://open.spotify.com/artist/2YXVRXrYHVJrC5P1eTGYSu'
			},
			{
				name: 'applemusic',
				url: 'https://music.apple.com/us/artist/aekae/1545741130'
			},
			{
				name: 'twitch',
				url: 'https://twitch.tv/aekaemusic'
			},
			{
				name: 'youtube',
				url: 'https://www.youtube.com/@aekaemusic'
			},
			{
				name: 'instagram',
				url: 'https://www.instagram.com/aekaemusic/'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/aekaemusic'
			},
			{
				name: 'facebook',
				url: 'https://www.facebook.com/aekaemusic'
			},
			{
				name: 'bandcamp',
				url: 'https://aekae.bandcamp.com'
			}
		],
		name: 'Aekae'
	},
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/thisisnoahb'
			},
			{
				name: 'spotify',
				url: 'https://open.spotify.com/artist/4F4w1Gkfja6wPJzuMKCLmk'
			},
			{
				name: 'applemusic',
				url: 'https://music.apple.com/us/artist/noah-b/1071519331'
			},
			{
				name: 'twitch',
				url: 'https://www.twitch.tv/thisisnoahb'
			},
			{
				name: 'instagram',
				url: 'https://www.instagram.com/_thisisnoahb/'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/thisisnoahb'
			},
			{
				name: 'bandcamp',
				url: 'https://thisisnoahb.bandcamp.com/'
			}
		],
		name: 'Noah B'
	},
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/gasker'
			},
			{
				name: 'twitch',
				url: 'https://www.twitch.tv/gaskerbpm'
			},
			{
				name: 'youtube',
				url: 'https://www.youtube.com/@gaskerbpm'
			},
			{
				name: 'instagram',
				url: 'https://www.instagram.com/gaskerbpm/'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/Gasker8'
			}
		],
		name: 'Gasker'
	},
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/disctr4k'
			},
			{
				name: 'spotify',
				url: 'https://open.spotify.com/artist/05ksHwXiCA9qt1bV1nN8F7'
			},
			{
				name: 'applemusic',
				url: 'https://music.apple.com/us/artist/disctr4k/1554665449'
			},
			{
				name: 'youtube',
				url: 'https://www.youtube.com/@disctr4k'
			},
			{
				name: 'instagram',
				url: 'https://www.instagram.com/disctr4k/'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/disctr4k'
			},
			{
				name: 'bandcamp',
				url: 'https://disctr4k.bandcamp.com/'
			}
		],
		name: 'disctr4k'
	},
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/lunanescence'
			},
			{
				name: 'spotify',
				url: 'https://open.spotify.com/artist/4kwmsmcjqgP2QcSzMTuDLL'
			},
			{
				name: 'applemusic',
				url: 'https://music.apple.com/us/artist/lunanescence/1570829354'
			},
			{
				name: 'twitch',
				url: 'https://www.twitch.tv/lunanesence'
			},
			{
				name: 'instagram',
				url: 'https://www.instagram.com/lunanescence_official/'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/lunanescence__'
			},
			{
				name: 'bandcamp',
				url: 'https://lunanescence.bandcamp.com/'
			}
		],
		name: 'Lunanescence'
	},
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/hiimtype_r'
			},
			{
				name: 'spotify',
				url: 'https://open.spotify.com/artist/15guHFW3ZQDoaWttbI2IRp'
			},
			{
				name: 'twitch',
				url: 'https://twitch.tv/type_rrr'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/imTYPE_R'
			},
			{
				name: 'bandcamp',
				url: 'https://type-r.bandcamp.com'
			}
		],
		name: 'Type R'
	},
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/yuunimoosic'
			},
			{
				name: 'spotify',
				url: 'https://open.spotify.com/artist/2x7yh8Cj6IPMk46qjsZdLW'
			},
			{
				name: 'applemusic',
				url: 'https://music.apple.com/us/artist/yuuni/1650439511'
			},
			{
				name: 'twitch',
				url: 'https://www.twitch.tv/yuuniosu'
			},
			{
				name: 'youtube',
				url: 'https://www.youtube.com/@yuunimoosic'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/yuunimoosic'
			},
			{
				name: 'bandcamp',
				url: 'https://yuuni.bandcamp.com'
			}
		],
		name: 'yuuni'
	},
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/wyste'
			},
			{
				name: 'twitch',
				url: 'https://www.twitch.tv/wystemusic'
			},
			{
				name: 'youtube',
				url: 'https://www.youtube.com/@wystemusic'
			},
			{
				name: 'instagram',
				url: 'https://www.instagram.com/_wyste/'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/_wyste'
			},
			{
				name: 'bandcamp',
				url: 'https://wyste.bandcamp.com'
			}
		],
		name: 'wyste'
	},
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/d4vt0r'
			},
			{
				name: 'youtube',
				url: 'https://www.youtube.com/@D4VT0R'
			},
			{
				name: 'instagram',
				url: 'https://www.instagram.com/d4vt0r/'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/D4VT0R_'
			},
			{
				name: 'bandcamp',
				url: 'https://d4vt0r.bandcamp.com/'
			}
		],
		name: 'D4VT0R'
	},
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/samwaitin'
			},
			{
				name: 'spotify',
				url: 'https://open.spotify.com/artist/4fUt1H64XAKDyYNRqUYzPG'
			},
			{
				name: 'applemusic',
				url: 'https://music.apple.com/us/artist/sam-waitin/1579494907'
			},
			{
				name: 'instagram',
				url: 'https://www.instagram.com/samwaitin/'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/sam_waitin'
			},
			{
				name: 'bandcamp',
				url: 'https://samwaitin.bandcamp.com/releases'
			}
		],
		name: 'SAM WAITIN'
	},
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/lurerabbit'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/rabbit_lure'
			}
		],
		name: 'Lure Rabbit'
	},
	{
		links: [],
		name: 'NaiMeng'
	},
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/lunalenta'
			},
			{
				name: 'spotify',
				url: 'https://open.spotify.com/artist/36un9X6TbRfeYAMadbI2SN'
			},
			{
				name: 'twitch',
				url: 'https://www.twitch.tv/lunalenta'
			},
			{
				name: 'instagram',
				url: 'https://www.instagram.com/lunalenta_ht/'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/luna_lenta'
			},
			{
				name: 'bandcamp',
				url: 'https://lunalenta.bandcamp.com/track/yesterday'
			}
		],
		name: 'Luna Lenta'
	},
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/voxkai'
			},
			{
				name: 'spotify',
				url: 'https://open.spotify.com/artist/3IKcTlbewbdMVkmUNimaQ0'
			},
			{
				name: 'applemusic',
				url: 'https://music.apple.com/us/artist/voxkai/1518828664'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/voxkai_'
			},
			{
				name: 'bandcamp',
				url: 'https://voxkai.bandcamp.com/'
			}
		],
		name: 'voxkai'
	},
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/thisisczer'
			},
			{
				name: 'spotify',
				url: 'https://open.spotify.com/artist/2PpGIcLGdpUVBwKGXLztTm'
			},
			{
				name: 'applemusic',
				url: 'https://music.apple.com/us/artist/c-zer/1630210572'
			},
			{
				name: 'twitch',
				url: 'https://twitch.tv/thisisczer'
			},
			{
				name: 'instagram',
				url: 'https://instagram.com/thisisczer'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/thisisczer'
			},
			{
				name: 'facebook',
				url: 'https://facebook.com/thisisczer'
			},
			{
				name: 'bandcamp',
				url: 'https://thisisczer.bandcamp.com/'
			}
		],
		name: 'C-ZER'
	},
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/kassio-971255094'
			},
			{
				name: 'spotify',
				url: 'https://open.spotify.com/artist/16Bu6VLyQePdnxIUqVNzRi'
			},
			{
				name: 'applemusic',
				url: 'https://music.apple.com/us/artist/kassio/1546480656'
			},
			{
				name: 'youtube',
				url: 'https://www.youtube.com/@kassioproject'
			},
			{
				name: 'instagram',
				url: 'https://www.instagram.com/kassio_project/'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/kassioproject'
			},
			{
				name: 'bandcamp',
				url: 'https://kassiomusic.bandcamp.com/'
			}
		],
		name: 'Kassio Project'
	},
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/crayvxn'
			},
			{
				name: 'spotify',
				url: 'https://open.spotify.com/artist/1GkulgH4pDrPg8EpIHI2hg'
			},
			{
				name: 'youtube',
				url: 'https://www.youtube.com/channel/UCqFRrPqrdQljTI3s1jIWfTQ'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/crayvxn'
			},
			{
				name: 'bandcamp',
				url: 'https://crayvxn.bandcamp.com/'
			}
		],
		name: 'crayvxn'
	},
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/moshii-lightz'
			},
			{
				name: 'twitch',
				url: 'https://www.twitch.tv/moshii_lightz'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/MoshiiLightz'
			},
			{
				name: 'bandcamp',
				url: 'https://moshiilightz.bandcamp.com/'
			}
		],
		name: 'MOSHII LIGHTZ'
	},
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/neurolinkmusic'
			},
			{
				name: 'spotify',
				url: 'https://open.spotify.com/artist/5Gup0O4o66XeN4PubuVFOS'
			},
			{
				name: 'twitch',
				url: 'https://www.twitch.tv/neurolinkmusic'
			},
			{
				name: 'youtube',
				url: 'https://www.youtube.com/channel/UCtCP9bFSaXq6-q_2u3tIZOw'
			},
			{
				name: 'instagram',
				url: 'https://www.instagram.com/neurolink_music/'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/neurolink_dnb'
			}
		],
		name: 'Neurolink'
	},
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/ausamusicofficial'
			},
			{
				name: 'spotify',
				url: 'https://open.spotify.com/artist/1mBXHykqQ0zTJafC86uBgO'
			},
			{
				name: 'applemusic',
				url: 'https://music.apple.com/us/artist/ausa/1533581292'
			},
			{
				name: 'twitch',
				url: 'https://twitch.tv/ausaofficial'
			},
			{
				name: 'youtube',
				url: 'https://youtube.com/@ausamusicofficial'
			},
			{
				name: 'instagram',
				url: 'https://instagram.com/__ausa__'
			},
			{
				name: 'facebook',
				url: 'https://www.facebook.com/ausaMusicOfficial'
			},
			{
				name: 'bandcamp',
				url: 'https://ausaofficial.bandcamp.com/'
			}
		],
		name: 'AUSA'
	},
	{
		links: [
			{
				name: 'soundcloud',
				url: 'https://soundcloud.com/stillcrisp'
			},
			{
				name: 'spotify',
				url: 'https://open.spotify.com/artist/7I0omdF0bBVakabsP93fJA'
			},
			{
				name: 'applemusic',
				url: 'https://music.apple.com/us/artist/still-crisp/1537379112'
			},
			{
				name: 'twitch',
				url: 'https://twitch.tv/stillcrisp'
			},
			{
				name: 'youtube',
				url: 'https://www.youtube.com/channel/UCLu8_Wgx8oMPk4IN1LPkCjA'
			},
			{
				name: 'twitter',
				url: 'https://twitter.com/still_crisp'
			},
			{
				name: 'bandcamp',
				url: 'https://stillcrisp.bandcamp.com/'
			}
		],
		name: 'still crisp'
	}
];

export const visualArtists = [];

export default [...musicians, ...visualArtists];
