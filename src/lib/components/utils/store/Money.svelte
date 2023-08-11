<script lang="ts">
	import type { MoneyV2Result } from '$lib/utils/shopify/schemas/common';
	import { fly } from 'svelte/transition';
	import type { z } from 'zod';

	export let price: z.infer<typeof MoneyV2Result>;
	export let showCurrency = false;

	export let compareAtPrice = false;
	export let replace0WithFree = false;

	$: formatPrice =
		(parseFloat(price.amount) > 0 || !replace0WithFree)
			? parseFloat(price.amount).toFixed(2) + (showCurrency ? price.currencyCode : '')
			: 'FREE DOWNLOAD';
</script>

<div class="flex flex-col">
	<slot />
	<div class="static {$$restProps.class}">
		<span class:line-through={compareAtPrice} class="inline-block">
			{formatPrice}
		</span>
	</div>
</div>
