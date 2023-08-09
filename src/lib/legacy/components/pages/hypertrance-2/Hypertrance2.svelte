<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	// Components
	import Hero from './components/Hero.svelte';
	import Embed from '$src/lib/legacy/components/utils/Embed.svelte';
	import Album from '$src/lib/legacy/components/utils/Album.svelte';

	// Assets
	import HYPERTRANCE_2 from '$lib/assets/albums/hypertrance-2/album';

	onMount(() => {
		if (!browser) return;

		setTimeout(async () => {
			document.querySelectorAll('iframe').forEach((el) => {
				el.setAttribute('src', `${el.dataset.src}`);
				setTimeout(async () => {
					el.classList.remove('opacity-0');
				}, 200);
			});
		}, 0);
	});
</script>

<Hero class="w-full -mb-[100dvh] h-screen-dynamic font-comsat-navy pointer-events-none" />
<section id="premiere" class="container !p-0 !mb-0 mt-[24rem] md:mt-[32rem] lg:mt-[40rem]">
	<Embed
		class="w-full shadow-lg shadow-black/50"
		src="https://www.youtube-nocookie.com/embed/3sCu-zjVa5c?&autoplay=1&mute=1&controls=1&showinfo=1&start=9"
	/>
</section>
<Album class="container" album={HYPERTRANCE_2} />
