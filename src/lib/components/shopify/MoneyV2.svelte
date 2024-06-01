<script lang="ts">
	import formatMoney from '$lib/utils/currency';

	let {
		amount,
		currencyCode,
		freeString = 'FREE',
		class: className
	}: {
		amount: number;
		currencyCode: string;
		freeString?: string;
		class: string;
	} = $props();

	let formattedPrice = formatMoney(amount, currencyCode, { freeString });

	$effect(() => {
		formattedPrice = formatMoney(amount, currencyCode, { freeString });
	});
</script>

<span class="static inline-block {className}">
	{formattedPrice}
</span>
