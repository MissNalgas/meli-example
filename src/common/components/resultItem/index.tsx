import { formatPrice } from "@common/utils";
import { IItem } from "@modules/items/domain/models";

export default function ResultItem({onClick, item}: ResultItemProps) {
	const {picture, title, price: {amount, currency}, city} = item;

	const formattedPrice = formatPrice(amount, currency);

	return (
		<>
			<button onClick={onClick} className="flex w-full p-small gap-small bg-white items-stretch">
				<div
					style={{backgroundImage: `url('${picture}')`}}
					className="rounded w-image h-image bg-center bg-cover"
				/>
				<div className="flex flex-col gap-medium justify-center flex-1 items-stretch">
					<div className="flex items-center justify-between max-w-2xl">
						<h2 className="text-2xl">{formattedPrice}</h2>
						<span className="text-dark-gray text-xs">
							{city}
						</span>
					</div>
					<h3 className="text-lg text-left">{title}</h3>
				</div>
			</button>
			<hr/>
		</>
	);
}
interface ResultItemProps {
	onClick?: () => void;
	item: IItem;
}
