export default function BreadCrumps() {
	const texts = [
		'Electronica',
		'iPod',
		'Reproducciones',
		'Ipod',
		'32'
	];

	return (
		<span className="text-dark-gray">
			{texts.join(' > ')}
		</span>
	);

}
