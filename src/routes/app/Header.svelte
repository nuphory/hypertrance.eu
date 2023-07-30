<script>
	import { id } from '$src/lib/identity';
	import Navigation from './Navigation.svelte';
	import Cartbutton from './Cartbutton.svelte';
</script>

<header >
	
	<div class="my-4 container flex gap-10 justify-between items-center">
		<a class="flex-1 whitespace-nowrap" href="/app">:: {id.name}</a>
		<Navigation class="hidden md:flex"/>
		<Cartbutton />
	</div>
</header>
