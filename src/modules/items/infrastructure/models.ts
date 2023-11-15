export interface IItemDTO {
    condition?: string;
    free_shipping?: boolean;
    id?: string;
    picture?: string;
    price?: {
	currency?: string;
	amount?: number;
	decimals?: number;
    },
    title?: string;
    city?: string;
    categories?: string[];
}

export interface IItemResponseDTO {
    author?: {
	name?: string;
	lastname?: string;
    },
    categories?: string;
    items?: IItemDTO[];
}

export interface IItemDetailDTO {
    condition?: string;
    description?: string;
    free_shipping?: boolean;
    id?: string;
    picture?: string;
    price?: {
	currency?: string;
	amount?: number;
	decimals?: number;
    };
    title?: string;
    sold_quantity?: number;
    categories?: string[]
}

export interface IItemDetailResponseDTO {
    author?: {
	name?: string;
	lastname?: string;
    },
    item?: IItemDetailDTO;
}
