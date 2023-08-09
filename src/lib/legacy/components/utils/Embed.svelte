<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	export let src: string;

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

<iframe
	allow="autoplay;encrypted-media"
	allowfullscreen
	class="{$$restProps.class} transition-opacity duration-default ease-out aspect-video opacity-0"
	frameborder="0"
	title="Hypertrance 2"
	data-src={src}
/>
