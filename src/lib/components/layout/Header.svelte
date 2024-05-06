<script lang="ts">
	import { id } from '$src/lib/assets/identity';
	import Navigation from './Navigation.svelte';
	import CartButton from './CartButton.svelte';
	import CartDrawer from './CartDrawer.svelte';

	let className: string | undefined;

	export { className as class };
</script>

<header
	id="top"
	class="
		sticky z-30 top-0 {className}
		bg-primary
		before before:border-y before:border-white
	"
>
	<div class="container">
		<div class="relative flex gap-10 justify-between items-center max-h-12">
			<span class="flex-1">
				<a data-sveltekit-reload class="px-3 whitespace-nowrap" href="/">:: {id.name}</a>
			</span>

			<Navigation
				class="
					relative lg:flex self-start pb-4 pl-5 askew
					border-t before:border-l before:border-b before:border-white
					before before:w-[200%] before:bg-primary before:-z-10
					after after:max-h-[calc(3rem-2px)] after:-left-px after:bg-primary after:-z-10
				"
			>
				<!-- TODO transparent background thing -->
			</Navigation>
		</div>
		<CartDrawer />
	</div>
</header>
