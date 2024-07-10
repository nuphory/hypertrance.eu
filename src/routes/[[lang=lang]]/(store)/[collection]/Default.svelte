<script lang="ts">
	import type Collection from '$lib/shopify/zod/catalog/collection/Collection';
	import type { z } from 'zod';

	let { collection }: { collection: z.infer<typeof Collection> } = $props();
</script>

<h1>{collection.title}</h1>

<style>
</style>
