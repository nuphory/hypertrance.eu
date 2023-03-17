<script lang="ts">
	import { LinkKind } from '$src/lib/types/link';

        // // Assets
        // import soundcloud from '$lib/assets/img/icons/soundcloud.svg?raw';
        // import spotify from '$lib/assets/img/icons/spotify.svg?raw';
        // import apple_music from '$lib/assets/img/icons/apple_music.svg?raw';
        // import twitch from '$lib/assets/img/icons/twitch.svg?raw';
        // import youtube from '$lib/assets/img/icons/youtube.svg?raw';
        // import instagram from '$lib/assets/img/icons/instagram.svg?raw';
        // import twitter from '$lib/assets/img/icons/twitter.svg?raw';
        // import facebook from '$lib/assets/img/icons/facebook.svg?raw';
        // import bandcamp from '$lib/assets/img/icons/bandcamp.svg?raw';
        // import website from '$lib/assets/img/icons/website.svg?raw';

	export let kind: LinkKind;

        // let icon: string;

	// switch (kind) {
	// 	case LinkKind.SOUNDCLOUD:
	// 		icon = soundcloud;
	// 		break;
	// 	case LinkKind.SPOTIFY:
	// 		icon = spotify;
	// 		break;
	// 	case LinkKind.APPLE_MUSIC:
	// 		icon = apple_music;
	// 		break;
	// 	case LinkKind.TWITCH:
	// 		icon = twitch;
	// 		break;
	// 	case LinkKind.YOUTUBE:
	// 		icon = youtube;
	// 		break;
	// 	case LinkKind.INSTAGRAM:
	// 		icon = instagram;
	// 		break;
	// 	case LinkKind.TWITTER:
	// 		icon = twitter;
	// 		break;
	// 	case LinkKind.FACEBOOK:
	// 		icon = facebook;
	// 		break;
	// 	case LinkKind.BANDCAMP:
	// 		icon = bandcamp;
	// 		break;
	// 	case LinkKind.WEBSITE:
	// 		icon = website;
	// 		break;
	// }
</script>

<img class="m-0 p-0 h-6 !max-w-7xl w-6 aspect-square" src={kind.icon} alt={kind.name} />

<!-- {@html icon} -->
