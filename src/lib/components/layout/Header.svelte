<script>
	import { id } from '$src/lib/assets/identity';
	import Navigation from './Navigation.svelte';
	import CartButton from './CartButton.svelte';
	import CartDrawer from './CartDrawer.svelte';
</script>

<header id="top" class="sticky z-30 top-0 bg-primary">
	<div class="container">
		<div class="py-4 relative flex gap-10 justify-between items-center">
			<span class="flex-1"
				><a data-sveltekit-reload class="p-3 whitespace-nowrap" href="/">:: {id.name}</a></span
			>
			<!--<Navigation class="hidden lg:flex" />-->

			<CartButton />
		</div>
		<CartDrawer />
	</div>
</header>
