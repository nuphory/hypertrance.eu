<script lang="ts">
	import { browser } from '$app/environment';
	import AudioPlayer from '$src/lib/legacy/utils/AudioPlayer';
	import { onMount } from 'svelte';
	let player: AudioPlayer;

	onMount(() => {
		if (browser) {
			player = new AudioPlayer($$restProps.id, $$restProps.class);
		}
	});
</script>

<section class="{$$restProps.class} backdrop-blur-lg bg-black/50 w-full">
	<form id="music-player__controls" class="flex gap-2 container">
		<!-- Play/Pause -->
		<button
			id="music-player__controls__play-toggle"
			class="hyper-button button-neutral aspect-square overflow-clip"
		>
			<span>≪</span>
		</button>
		<button
			id="music-player__controls__play-toggle"
			class="hyper-button button-neutral aspect-square overflow-clip"
		>
			<span>▶️</span>
		</button>
		<button
			id="music-player__controls__play-toggle"
			class="hyper-button button-neutral aspect-square overflow-clip"
		>
			<span>≫</span>
		</button>
		<!-- Progress/Seek bar -->
		<input id="music-player__controls__seek-slider" class="flex-1" type="range" min="0" max="100" value="0" />
		<!-- Volume -->
		<div class="group">
                        <input id="music-player__controls__volume-slider" class="opacity-0 w-0 group-hover:w-8" type="range" min="0" max="100" value="100" />
                        <button
                                id="music-player__controls__volume-mute-toggle"
                                class="hyper-button button-neutral aspect-square overflow-clip"
                        >
                                <span>🔊</span>
                        </button>
                </div>
		<!-- Optional: Queue -->
		<!-- <div></div> -->
	</form>
</section>
<audio id="music-player__audio-el" class="hidden" />
```
