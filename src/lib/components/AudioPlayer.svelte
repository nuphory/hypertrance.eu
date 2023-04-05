<script lang="ts">
	import { browser } from '$app/environment';
	import AudioPlayer from '$lib/utils/AudioPlayer';
	import { onMount } from 'svelte';
	let player: AudioPlayer;

	onMount(() => {
		if (browser) {
			player = new AudioPlayer($$restProps.id, $$restProps.class);
		}
	});
</script>

<section class="bg-gray-300 w-full">
	<div class="container">
		<!-- Play/Pause -->
		<div />
		<!-- Progress/Seek bar -->
		<div />
		<!-- Volume -->
		<div />
		<!-- Optional: Queue -->
		<!-- <div></div> -->
	</div>
</section>
