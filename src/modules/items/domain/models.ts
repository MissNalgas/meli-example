export interface IItem {
	id: string;
	title: string;
	price: {
		currency: string;
		amount: number;
		decimals: number;
	};
	picture: string;
	condition: string;
	freeShipping: boolean;
	city: string;
	categories: string[];
}

export interface IItemDetail extends IItem {
	soldQuantity: number;
	description: string;
}
