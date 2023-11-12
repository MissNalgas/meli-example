import { IItem, IItemDetail } from "../domain/models";
import { ItemsRepository } from "../domain/repository";
import axios from 'axios';
import { IItemDetailResponseDTO, IItemResponseDTO } from "./models";
import { ItemAdapter } from './adapters';

class ItemsService implements ItemsRepository {
    async get(query: string): Promise<IItem[]> {
	const response = await axios.get<IItemResponseDTO>(`/api/items?q=${query}`);
	return response.data.items?.map(ItemAdapter.itemFromDTO) || [];
    }
    async getDetail(id: string): Promise<IItemDetail> {
	const response = await axios.get<IItemDetailResponseDTO>(`/api/items/${id}`);
	return ItemAdapter.itemDetailFromDTO(response.data.item || {});
    }
}

export const itemsService = new ItemsService();
