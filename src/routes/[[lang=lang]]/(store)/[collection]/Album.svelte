<script lang="ts">
	import type Collection from '$lib/shopify/zod/catalog/collection/Collection';
	import type { z } from 'zod';

	let { collection }: { collection: z.infer<typeof Collection> } = $props();
</script>

<main>
	<section id="hero">

	</section>
</main>

<style>
</style>
