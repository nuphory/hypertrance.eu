<script lang="ts">
	import type { z } from 'zod';
	import type { MoneyV2Result } from '../../../utils/schemas';

	export let price: z.infer<typeof MoneyV2Result>;
	export let showCurrency: boolean = false;
        
        export let compareAtPrice: boolean = false;

	$: formatPrice = parseFloat(price.amount).toFixed(2) + (showCurrency ? price.currencyCode : '');
</script>

<div class="flex flex-col">
        <slot />
        <div class={$$restProps.class}>
                <span class:line-through={compareAtPrice} class="inline-block">
                        {formatPrice}
                </span>
        </div>
</div>
