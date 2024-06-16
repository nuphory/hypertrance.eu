<script>
	import { page } from '$app/stores';
</script>

<header class="sticky top-0 z-10">
	<section class="py-xl">
                <div data-role="background" class="bg-dark-primary-island"></div>
		<nav>
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
