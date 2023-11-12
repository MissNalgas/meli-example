export function formatPrice(price: number, currency: string) {

	return Intl.NumberFormat(
		'en-us',
		{
			style: 'currency',
			currency,
			minimumFractionDigits: 0,
			currencyDisplay: 'narrowSymbol'
		}
	).format(price);

}
