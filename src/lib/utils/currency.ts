const getCurrencySymbol = (locale: string, currency: string) => {
	return (0)
		.toLocaleString(locale, {
			style: 'currency',
			currency,
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		})
		.replace(/\d/g, '')
		.trim();
};

const formatMoney = (amount: number, currency: string, options: { locale?: string, freeString?: string } = { locale: 'en-US'} ) => {
	if (typeof amount !== 'number') throw new TypeError('Amount must be a number');

	if (amount === 0) return 'FREE';

	return amount.toLocaleString(options.locale, {
		style: 'currency',
		currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	});
};

export { getCurrencySymbol };
export default formatMoney;
