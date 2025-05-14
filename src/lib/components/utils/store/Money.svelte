<script lang="ts">
	import type { MoneyV2Result } from '$lib/utils/shopify/schemas/common';
	import type { z } from 'zod';

	export let price: z.infer<typeof MoneyV2Result>;
	export let discountPrice: z.infer<typeof MoneyV2Result> | undefined;
	export let showCurrency = false;

	export let replace0WithFree = false;

	$: prettyPrice =
		parseFloat(price.amount) > 0 || !replace0WithFree
			? parseFloat(price.amount).toFixed(2) + (showCurrency ? price.currencyCode : '')
			: 'FREE DOWNLOAD';

	$: prettyDiscountedPrice =
		!discountPrice || !discountPrice?.amount
			? undefined
			: parseFloat(discountPrice.amount) > 0 || !replace0WithFree
			? parseFloat(discountPrice?.amount).toFixed(2) +
			  (showCurrency ? discountPrice?.currencyCode : '')
			: 'FREE DOWNLOAD';
</script>

<div class="flex flex-col">
	<slot />
	<div
		class="static {$$restProps.class} flex flex-col h-fit font-bold text-lg {discountPrice &&
			`pb-0.5 pt-0.5`}"
	>
		<span class="text-xs mt-0 text-slate-400">before VAT</span>
		{#if discountPrice}
			<span class="block -mb-1 pl-1">
				{prettyPrice}
			</span>
		{/if}
		<span
			class:line-through={discountPrice}
			class="inline-block decoration-hyperblue-50/50 {discountPrice &&
				`text-sm mb-1 text-slate-400`}"
		>
			{discountPrice ? prettyDiscountedPrice : prettyPrice}
		</span>
	</div>
</div>
