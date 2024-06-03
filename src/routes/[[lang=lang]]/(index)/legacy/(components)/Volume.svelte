<script lang="ts">
	import type { Euterpe } from '@euterpe.js/euterpe';
	import { Icon, SpeakerWave } from 'svelte-hero-icons';
	export let player: Euterpe;
	let is_hiding = true;
	let timeout_id: any | undefined;
	async function toggle_timeout() {
		if (timeout_id) clearTimeout(timeout_id);
		// timeout_id = setTimeout(() => (is_hiding = true), 3000);
	}
</script>

<div
	on:mouseenter={() => {
		if (timeout_id) clearTimeout(timeout_id);
	}}
	on:mouseleave={toggle_timeout}
	class=" hidden md:grid fixed left-8 min-[1920px]:left-[calc((100vw-1920px)/2)] bottom-24 w-12 h-12 bg-text-primary z-10 rounded-full p-1
    grid-cols-1 grid-flow-row [transition-duration:_100ms] transition-all shadow-[rgba(0,0,0,.3)] shadow-[0_0_.5rem_1px]
	place-items-end
    {is_hiding
		? 'h-12 grid-rows-[1fr_2rem] hover:scale-90 active:scale-105 active:brightness-105  hover:brightness-75'
		: 'h-[20rem] grid-rows-[1fr_2rem]'}
    "
>
	<div
		class=" mx-auto [transition-duration:_100ms] ml-5 {is_hiding ? 'w-0 h-0 ' : 'w-[16rem] h-5'}"
	>
		<input
			on:input={(e) => player.change_volume(e.target.valueAsNumber)}
			class="volumeSlider {is_hiding ? 'hidden' : 'block'}"
			type="range"
			min="0"
			max="1"
			value="1"
			step="0.01"
		/>
	</div>
	<div on:mousedown={() => (is_hiding = !is_hiding)}>
		<Icon
			class="w-10 h-10 stroke-[var(--color-bg-side)] fill-[var(--color-bg-side)] "
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
	//  [-webkit-appearance:_slider-vertical] [writing-mode:_bt-lr] if custom track ain't workie
	.volumeSlider {
		@apply appearance-none [transform:rotate(270deg)] origin-left bg-transparent w-full h-4 relative m-0 p-0 border-none cursor-pointer -mb-[14rem];
	}
	.volumeSlider::-webkit-slider-runnable-track {
		@apply bg-[var(--color-bg-side)] rounded-full w-full h-4 appearance-none;
	}

	.volumeSlider::-moz-range-track {
		@apply bg-[var(--color-bg-side)] rounded-full w-full h-4 appearance-none;
	}

	.volumeSlider::-ms-track {
		@apply bg-[var(--color-bg-side)] rounded-full w-full h-4 appearance-none;
	}

	.volumeSlider::-moz-range-thumb {
		@apply h-4 w-4 appearance-none rounded-full bg-text-primary border-none my-auto;
	}
	.volumeSlider::-ms-thumb {
		@apply h-4 w-4 appearance-none rounded-full bg-text-primary border-none my-auto;
	}
	.volumeSlider::-webkit-slider-thumb {
		@apply h-4 w-4 -m-1.5 appearance-none rounded-full bg-text-primary border-none my-auto;
	}
</style>
