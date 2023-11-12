import Image from 'next/image';

export default function SearchButton(props : SearchButtonProps) {
	return (
		<button 
			className="bg-light-gray h-10 w-10 grid place-content-center rounded"
			{...props}
		>
			<Image src='/ic_Search@2x.png' alt="Search icon" width={22} height={22}/>
		</button>
	);
}

interface SearchButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}
