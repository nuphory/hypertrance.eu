import { AlbumBuilder, type Album } from '$src/lib/legacy/metadata/album';
import { ArtistBuilder } from '$src/lib/legacy/metadata/artist';
import { LinkBuilder, Platform } from '$src/lib/legacy/metadata/link';

// Tracks
import HYPERTRANCE from './tracks/01-hypertrance';
import EVERAFTER from './tracks/02-everafter';
import INFINITY from './tracks/03-infinity';
import DIGITAL_ETERNITY from './tracks/04-digital_eternity';
import MYRIA_EXAXIS from './tracks/05-myria_exaxis';
import EXOPLANET_HYPERTRANCE from './tracks/06-exoplanet_hypertrance';
import CARRY_ALL_BEFORE_ONE from './tracks/07-carry_all_before_one';
import GHOST_WIRE from './tracks/08-ghost_wire';
import INFINITE_EVOLUTION from './tracks/09-infinite_evolution';
import THROUGH_THE_FOREST from './tracks/10-through_the_forest';
import DRYFTCURRENT from './tracks/11-dryftcurrent';
import WAIT_FOR_ME from './tracks/12-wait_for_me';
import REJECTEDBYHYPERTRANCE from './tracks/13-rejectedbyhypertrance';
import ASK_THE_UNIVERSE from './tracks/14-ask_the_universe';
import SSR05 from './tracks/15-ssr05';
import I_NEED from './tracks/16-i_need';
import STEP10 from './tracks/17-step10';
import MOON_SHINE from './tracks/18-moon_shine';
import JUJU_STOMP from './tracks/19-juju_stomp';
import TWILIGHT from './tracks/20-twilight';
import SOUL_VERTEX from './tracks/21-soul_vertex';

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
