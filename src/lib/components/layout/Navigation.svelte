<script lang="ts">
	import Dropdown from '$lib/components/utils/Dropdown.svelte';
	import type { NavLink as TNavLink } from '$src/lib/types/navigation';
	import CartButton from './CartButton.svelte';
	import NavLink from './NavLink.svelte';

	const navigation: TNavLink[] = [
		{
			label: 'music',
			href: '/music',
			submenu: [
				{
					label: 'hypertrance worldwide',
					href: '/music/hypertrance-worldwide'
				},
				{
					label: 'hypertrance 2',
					href: '/music/hypertrance-2'
				},
				{
					label: 'hypertrance 1',
					href: '/music/hypertrance-1'
				}
			]
		},
		{
			label: 'club',
			href: '/club'
		},
		{
			label: 'samplepacks',
			href: '/samplepacks',
			submenu: [
				{
					label: 'hypertrance samplepack',
					href: 'store/products/hypertrance-samplepack'
				}
			]
		},
		{
			label: 'artbooks',
			href: '/artbooks',
			submenu: [
				{
					label: 'hypertrance 2',
					href: '/artbooks/hypertrance-2'
				},
				{
					label: 'hypertrance 1',
					href: '/artbooks/hypertrance-1'
				}
			]
		},
		{
			label: 'store',
			href: '/store',
			submenu: [
				{
					label: 'all products',
					href: '/store/products'
				},
				{
					label: 'music',
					href: '/store/products?filter=product_type:music'
				},
				{
					label: 'samplepacks',
					href: '/store/products?filter=product_type:samplepack'
				},
				{
					label: 'artbooks',
					href: '/store/products?filter=product_type:artbook'
				}
			]
		}
	];
</script>

<nav class={$$restProps.class}>
	<slot />
	<ul class="relative h-full flex gap-4">
		{#each navigation as navlink, _i}
			<NavLink {navlink} class="max-xl:hidden" />
		{/each}
		<li class="relative">
			<CartButton />
		</li>
	</ul>
</nav>

<style lang="scss">
</style>
