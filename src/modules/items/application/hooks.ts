import { useEffect, useState } from "react";
import { IItem, IItemDetail } from "../domain/models";
import { itemsService } from "../infrastructure/services";

export function useItems(query?: string | null) {
	const [data, setData] = useState<IItem[]>([]);

	useEffect(() => {
		if (!query) return;
		itemsService.get(query).then(setData);
	}, [query]);

	return data;
}

export function useItemDetail(id?: string | null) {
	const [data, setData] = useState<IItemDetail>();

	useEffect(() => {
		if (!id) return;
		itemsService.getDetail(id).then(setData);
	}, [id]);

	return data;
}
