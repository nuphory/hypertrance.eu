<script lang="ts">
	import type { Euterpe } from '@euterpe.js/euterpe';
	import { Icon, SpeakerWave } from 'svelte-hero-icons';
	export let player: Euterpe;
	let is_hiding = true;
</script>

<div
	class=" hidden md:grid fixed left-24 bottom-24 w-16 h-16 bg-text-primary z-10 rounded-full p-2
    grid-cols-1 grid-flow-row [transition-duration:_100ms] transition-all
    {is_hiding
		? 'h-16 grid-rows-[1fr_3rem] hover:scale-90 active:scale-105 active:brightness-105 shadow-[var(--color-bg-side)] shadow-[0_0_3rem_5px] hover:brightness-75'
		: 'h-[20rem] grid-rows-[1fr_3rem]'}
    "
>
	<div class=" mx-auto [transition-duration:_100ms] {is_hiding ? 'w-0 h-0 ' : 'w-4 h-full'}">
		<input
			class="volumeSlider {is_hiding ? 'hidden' : 'block'}"
			type="range"
			min="0"
			max="1"
			value="1"
			step="0.01"
		/>
	</div>
	<div on:mouseup={() => (is_hiding = !is_hiding)}>
		<Icon
			class="w-12 h-12 stroke-[var(--color-bg-side)] fill-[var(--color-bg-side)] "
			src={SpeakerWave}
		/>
	</div>
</div>

<style lang="scss">
	@keyframes hide {
		0% {
			@apply block;
		}
		99% {
			@apply block;
		}
		100% {
			@apply hidden;
		}
	}
	.volumeSlider {
		@apply appearance-none bg-transparent h-full w-4 relative m-0 p-0 py-2 border-none cursor-pointer;
	}
	.volumeSlider::-webkit-slider-runnable-track {
		@apply bg-[var(--color-bg-side)] rounded-full h-full;
	}

	.volumeSlider::-moz-range-track {
		@apply bg-[var(--color-bg-side)] rounded-full h-full;
	}

	.volumeSlider::-ms-track {
		@apply bg-[var(--color-bg-side)] rounded-full h-full;
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
