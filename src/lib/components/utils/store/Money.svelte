<script lang="ts">
	import type { MoneyV2Result } from '$lib/utils/shopify/schemas/common';
	import { fly } from 'svelte/transition';
	import type { z } from 'zod';

	export let price: z.infer<typeof MoneyV2Result>;
	export let showCurrency: boolean = false;

	export let compareAtPrice: boolean = false;

	$: formatPrice =
		parseFloat(price.amount) > 0
			? parseFloat(price.amount).toFixed(2) + (showCurrency ? price.currencyCode : '')
			: 'FREE DOWNLOAD';
</script>

<div class="flex flex-col">
	<slot />
	<div class={$$restProps.class}>
		<span class:line-through={compareAtPrice} class="inline-block">
			{formatPrice}
		</span>
	</div>
</div>
