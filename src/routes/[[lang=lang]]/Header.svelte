<script>
	import { page } from '$app/stores';
</script>

<header class="sticky">
	<section class="absolute top-4 z-10">
		<nav class="container">
			<a href="/"
				>{$page.url.hostname
					.split('.')
					.filter((v, i, a) => i >= a.length - 2)
					.join('.')}</a
			>
			<ul></ul>
		</nav>
	</section>
</header>
