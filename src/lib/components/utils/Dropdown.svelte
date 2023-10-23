<script lang="ts">
	import { slide } from 'svelte/transition';

	export let on: 'mouseover' | 'mousedown' | 'mouseup' = 'mouseover';
	export let isOpen: boolean = false;

	export let direction: 'left' | 'right' | 'up' | 'down' = 'down';
	let inset: string;
	export let alignment: 'left' | 'right' | 'top' | 'bottom' = 'right';
	let align: string;

	switch (direction) {
		case 'left':
			inset = 'right-full text-right';
			break;
		case 'right':
			inset = 'left-full text-left';
			break;
		case 'up':
			inset = 'bottom-full';
			break;
		case 'down':
			inset = 'top-full';
			break;
	}

	switch (alignment) {
		case 'left':
			align = 'left-0 text-left';
			break;
		case 'right':
			align = 'right-0 text-right';
			break;
		case 'top':
			align = 'top-0';
			break;
		case 'bottom':
			align = 'bottom-0';
			break;
	}

	const mouseover = () => {
		if (on === 'mouseover') isOpen = true;
	};
	const mouseleave = () => {
		if (on === 'mouseover') isOpen = false;
	};
	const mousedown = () => {
		if (on === 'mousedown') isOpen = !isOpen;
	};
	const mouseup = () => {
		if (on === 'mousedown') isOpen = !isOpen;
	};
</script>

<div
	class="group relative"
	on:mouseover={mouseover}
	on:focus={mouseover}
	on:mouseleave={mouseleave}
	on:mousedown={mousedown}
	on:mouseup={mouseup}
>
	<slot name="title" />
	{#if isOpen}
		<div
			transition:slide={{ duration: 300 }}
			class="
				absolute
				
				{inset} {align}
			"
		>
			<slot name="content" />
		</div>
	{/if}
</div>
