<script>
	import { id } from '$src/lib/identity';
	import Navigation from './Navigation.svelte';
	import CartButton from './CartButton.svelte';
	import CartDrawer from './CartDrawer.svelte';
</script>

<header class="sticky z-50 top-0 bg-primary">
	<div class="container">
		<div class="py-4 relative flex gap-10 justify-between items-center">
			<a class="flex-1 whitespace-nowrap" href="/">:: {id.name}</a>
			<Navigation class="hidden lg:flex" />

			<CartButton />
		</div>
		<CartDrawer />
	</div>
</header>
