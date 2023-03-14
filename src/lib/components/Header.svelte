<script lang="ts">
	import { name } from '$lib/identity';
</script>

<header class="sticky top-0 h-[4rem] w-screen -mb-[4rem] z-50 backdrop-blur">
	<nav class="container h-full flex flex-row justify-between items-center">
		<h1 class="text-3xl px-8" aria-level={1}><a href="/" class="reset hover:scale-105 origin-left">{name}</a></h1>
		<ul class="hidden">
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</header>
