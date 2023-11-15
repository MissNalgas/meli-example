import { IItem, IItemDetail } from "../domain/models";
import { IItemDTO, IItemDetailDTO } from "./models";

export class ItemAdapter {
	static itemFromDTO(itemDTO: IItemDTO) : IItem {
		return {
			condition: itemDTO.condition || '',
			freeShipping: !!itemDTO.free_shipping,
			id: itemDTO.id || '',
			picture: itemDTO.picture || '',
			price: {
				currency: itemDTO.price?.currency || '',
				amount: itemDTO.price?.amount || 0,
				decimals: itemDTO.price?.decimals || 0,
			},
			title: itemDTO.title || '',
			city: itemDTO.city || '',
			categories: itemDTO.categories || [],
		}
	}

	static itemDetailFromDTO(itemDetail: IItemDetailDTO) : IItemDetail {
		return {
			condition: itemDetail.condition || '',
			description: itemDetail.description || '',
			freeShipping: !!itemDetail.free_shipping,
			id: itemDetail.id || '',
			picture: itemDetail.picture || '',
			price: {
				currency: itemDetail.price?.currency || '',
				amount: itemDetail.price?.amount || 0,
				decimals: itemDetail.price?.decimals || 0,
			},
			title: itemDetail.title || '',
			soldQuantity: itemDetail.sold_quantity || 0,
			city: '',
			categories: itemDetail.categories || [],
		}
	}
}
