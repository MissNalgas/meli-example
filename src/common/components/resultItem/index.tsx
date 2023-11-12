export default function ResultItem({onClick}: ResultItemProps) {
	const props = {
		img: 'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg',
		price: '$1.1980',
		name: 'Apple Ipod Touch 5g 15gb Negro',
		location: 'Capital Federal'
	};
	const {img, price, name, location} = props;

	return (
		<>
			<button onClick={onClick} className="flex w-full p-small gap-small bg-white items-stretch">
				<div
					style={{backgroundImage: `url('${img}')`}}
					className="rounded w-image h-image bg-center bg-cover"
				/>
				<div className="flex flex-col gap-medium justify-center flex-1 items-stretch">
					<div className="flex items-center justify-between max-w-2xl">
						<h2 className="text-2xl">{price}</h2>
						<span className="text-dark-gray text-xs">
							{location}
						</span>
					</div>
					<h3 className="text-lg text-left">{name}</h3>
				</div>
			</button>
			<hr/>
		</>
	);
}
interface ResultItemProps {
	onClick?: () => void;
}
