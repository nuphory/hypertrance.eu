<script>
	import Link from '$lib/components/utils/Link.svelte';
</script>

<main>
	<section id="hero" role="banner" class="py-32">
		<div data-role="background" class="bg-dark-primary"></div>
		<h1 class="text-hero">Featured Release</h1>
		<span role="doc-subtitle" class="text-display"
			>This is the landing page, which will include the current feature. From my understanding,
			djkato is responsible for this page.</span
		>

		<p>
			See <Link href="/hypertrance-2">hypertrance 2</Link> for the Album page.
		</p>

		<p>Also check out the following pages:</p>
		<ul class="list-disc list-inside">
                        <li><Link href="/hypertrance-worldwide">hypertrance worldwide</Link></li>
			<li><Link href="/demos/typography">typography demo</Link></li>
			<li><Link href="/store/products/hypertrance-samplepack">hypertrance samplepack</Link></li>
		</ul>

                <p>Find the entire codebase on <Link href="https://github.com/nuphory/hypertrance.eu">GitHub</Link>.</p>
	</section>
</main>
