<script lang="ts">
	import { name } from '$lib/identity';
</script>

<header class="">
	<nav class="flex flex-row justify-between items-center h-[4rem] max-w-7xl m-auto p-4">
		<h2><a href="/" class="reset hover:scale-105 origin-left">{name.toUpperCase()}</a></h2>
		<ul class="hidden">
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>
