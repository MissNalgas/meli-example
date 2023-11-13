import { useEffect, useState } from "react";
import { IItem, IItemDetail } from "../domain/models";
import { itemsService } from "../infrastructure/services";

type UseItemsReturn = [
	IItem[],
	boolean
];

export function useItems(query?: string | null) : UseItemsReturn {
	const [data, setData] = useState<IItem[]>([]);
	const [hasLoaded, setHasLoaded] = useState(false);

	useEffect(() => {
		if (!query) return;
		setHasLoaded(false);
		itemsService.get(query).then(setData).finally(() => {
			setHasLoaded(true);
		});
	}, [query]);

	return [data, hasLoaded];
}

export function useItemDetail(id?: string | null) {
	const [data, setData] = useState<IItemDetail>();

	useEffect(() => {
		if (!id) return;
		itemsService.getDetail(id).then(setData);
	}, [id]);

	return data;
}
