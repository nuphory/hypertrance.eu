<script lang="ts">
	import type { Euterpe } from '@euterpe.js/euterpe';
	import { Icon, SpeakerWave } from 'svelte-hero-icons';
	export let player: Euterpe;
	let is_hiding = true;
</script>

<div
	class="fixed right-24 bottom-24 w-16 h-16 bg-text-primary z-10 rounded-full p-2
    flex flex-col justify-between [transition-duration:_100ms] hover:brightness-75 transition-all
    {is_hiding
		? 'h-16 hover:scale-90 active:scale-105 active:brightness-105 shadow-[var(--color-bg-side)] shadow-[0_0_3rem_5px]'
		: 'h-[20rem]'}

    "
	on:mouseup={() => (is_hiding = !is_hiding)}
>
	<span class={is_hiding ? 'w-0 h-0 hidden' : 'inline w-4 h-[15rem]'}>
		<input
			class="volumeSlider"
			on:mouseup={(e) => player.change_volume(e.target.valueAsNumber)}
			type="range"
			min="0"
			max="1"
			value="1"
			step="0.01"
		/>
	</span>
	<Icon
		class="w-12 h-12 stroke-[var(--color-bg-side)] fill-[var(--color-bg-side)]"
		src={SpeakerWave}
	/>
</div>

<style lang="scss">
	.volumeSlider {
		@apply appearance-none bg-transparent h-full w-4 relative m-0 p-0 border-none cursor-pointer;
	}
	.volumeSlider::-webkit-slider-runnable-track {
		@apply bg-text-primary rounded-full w-1;
	}

	.volumeSlider::-moz-range-track {
		@apply bg-text-primary rounded-full w-1;
	}

	.volumeSlider::-ms-track {
		@apply bg-text-primary rounded-full w-1;
	}

	.volumeSlider::-moz-range-thumb {
		@apply h-4 w-4 appearance-none rounded-full bg-text-primary border-none;
	}
	.volumeSlider::-ms-thumb {
		@apply h-4 w-4 appearance-none rounded-full bg-text-primary border-none;
	}
	.volumeSlider::-webkit-slider-thumb {
		@apply h-4 w-4 -m-1.5 appearance-none rounded-full bg-text-primary border-none;
	}
</style>
