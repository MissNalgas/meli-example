export default function BreadCrumps({items}: BreadCrumpsProps) {

	return (
		<span data-testid="breadcrump" className="text-dark-gray">
			{items.join(' > ')}
		</span>
	);
}

interface BreadCrumpsProps {
	items: string[];
}
