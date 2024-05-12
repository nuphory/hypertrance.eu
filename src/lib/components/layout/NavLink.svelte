<script lang="ts">
	import Dropdown from './../utils/Dropdown.svelte';
	import type { NavLink } from '$lib/types/navigation';
	import { fly } from 'svelte/transition';
	export let navlink: NavLink;

	export let index: number = 0;

	let className: string;
	let style: string = '';

	export { className as class, style };
	let opened: boolean;
</script>

<li transition:fly={{ x: 15, duration: 300, delay: index * 50 }} class="block {className}" {style}>
	{#if navlink.submenu}
		<Dropdown bind:isOpen={opened}>
			<a href={navlink.href} class="hyper-button askew" slot="label">
				<span class="inline-block"> {navlink.label} </span>
			</a>
			<ul slot="submenu" class="relative w-max [&_a]:!text-end">
				{#each navlink.submenu as item, i}
						<svelte:self
							index={i}
							navlink={item}
							style="--tw-translate-x: {1.35 + i * 1.35}rem;"
							class="-translate-x-0 {className}"
						/>
						<!-- recursive component -->
				{/each}
			</ul>
		</Dropdown>
	{:else}
		<a href={navlink.href} class="hyper-button askew">
			<span class="inline-block"> {navlink.label} </span>
		</a>
	{/if}
</li>

<style lang="scss">
	a {
		@apply py-3 px-6;
		@apply max-h-12;
		@apply hover:translate-y-0;
		@apply border-l border-b;

		@apply bg-primary;

		@apply overflow-clip text-center;

		@apply ring-0 group-hover:ring-1;
		@apply group-hover:before:bg-[33%_33%];
	}
</style>
