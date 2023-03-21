import { AlbumBuilder, type Album } from '$lib/metadata/album';
import { ArtistBuilder } from '$lib/metadata/artist';
import { LinkBuilder, Platform } from '$lib/metadata/link';

// Tracks
import HYPERTRANCE from './tracks/hypertrance';
import EVERAFTER from './tracks/everafter';
import INFINITY from './tracks/infinity';
import DIGITAL_ETERNITY from './tracks/digital_eternity';
import MYRIA_EXAXIS from './tracks/myria_exaxis';
import EXOPLANET_HYPERTRANCE from './tracks/exoplanet_hypertrance';
import CARRY_ALL_BEFORE_ONE from './tracks/carry_all_before_one';
import GHOST_WIRE from './tracks/ghost_wire';
import INFINITE_EVOLUTION from './tracks/infinite_evolution';
import THROUGH_THE_FOREST from './tracks/through_the_forest';
import DRYFTCURRENT from './tracks/dryftcurrent';
import WAIT_FOR_ME from './tracks/wait_for_me';
import REJECTEDBYHYPERTRANCE from './tracks/rejectedbyhypertrance';
import ASK_THE_UNIVERSE from './tracks/ask_the_universe';
import SSR05 from './tracks/ssr05';
import I_NEED from './tracks/i_need';
import STEP10 from './tracks/step10';
import MOON_SHINE from './tracks/moon_shine';
import JUJU_STOMP from './tracks/juju_stomp';
import TWILIGHT from './tracks/twilight';
import SOUL_VERTEX from './tracks/soul_vertex';

const HYPERTRANCE_2: Album = new AlbumBuilder()
	.setTitle('hypertrance 2')
	.addAlbumArtist(
		new ArtistBuilder()
			.setName('hypertrance')
			.addLink(
				new LinkBuilder().setPlatform(Platform.WEBSITE).setUrl('https://hypertrance.eu/').create()
			)
			.addLink(
				new LinkBuilder()
					.setPlatform(Platform.BANDCAMP)
					.setUrl('https://hypertrance.bandcamp.com/')
					.create()
			)
			.create()
	)
	.setReleaseDate(new Date('2023-03-17T20:30:00.000Z'))
	.addTrack(HYPERTRANCE)
	.addTrack(EVERAFTER)
	.addTrack(INFINITY)
	.addTrack(DIGITAL_ETERNITY)
	.addTrack(MYRIA_EXAXIS)
	.addTrack(EXOPLANET_HYPERTRANCE)
	.addTrack(CARRY_ALL_BEFORE_ONE)
	.addTrack(GHOST_WIRE)
	.addTrack(INFINITE_EVOLUTION)
	.addTrack(THROUGH_THE_FOREST)
	.addTrack(DRYFTCURRENT)
	.addTrack(WAIT_FOR_ME)
	.addTrack(REJECTEDBYHYPERTRANCE)
	.addTrack(ASK_THE_UNIVERSE)
	.addTrack(SSR05)
	.addTrack(I_NEED)
	.addTrack(STEP10)
	.addTrack(MOON_SHINE)
	.addTrack(JUJU_STOMP)
	.addTrack(TWILIGHT)
	.addTrack(SOUL_VERTEX)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.WEBSITE)
			.setUrl('https://hypertrance.eu/album/hypertrance-2')
			.create()
	)
	.addLink(
		new LinkBuilder()
			.setPlatform(Platform.BANDCAMP)
			.setUrl('https://hypertrance.bandcamp.com/album/hypertrance-2')
			.create()
	)
	.create();

export default HYPERTRANCE_2;
