<script lang="ts">
	import type { z } from 'zod';
	import type { MoneyV2Result } from '../utils/schemas';

	export let price: z.infer<typeof MoneyV2Result>;
	export let showCurrency: boolean = false;
        

	$: formatPrice = parseFloat(price.amount).toFixed(2) + (showCurrency ? price.currencyCode : '');
</script>

<span class="{$$restProps.class}">
	{formatPrice}
</span>
