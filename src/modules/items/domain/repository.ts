import { IItem, IItemDetail } from "./models";

export interface ItemsRepository {
	get(_query: string): Promise<IItem[]>;
	getDetail(_id: string): Promise<IItemDetail>;
}
