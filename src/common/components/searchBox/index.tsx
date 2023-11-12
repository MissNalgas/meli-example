import Image from 'next/image';
import TextInput from '../textInput';
import SearchButton from '../searchButton';
import { FormEventHandler } from 'react';
import Link from 'next/link';

export default function SearchBox({className, onSearch} : SearhBoxProps) {
	return (
		<div className={"flex gap-4"+" "+className}>
			<Link href="/">
				<Image alt="ML logo" src="/Logo_ML.png" width={53} height={36}/>
			</Link>
			<form onSubmit={onSearch} className='rounded overflow-hidden flex bg-white flex-1'>
				<TextInput
					name="search"
					placeholder='Nunca dejes de buscar'
				/>
				<SearchButton type="submit"/>
			</form>
		</div>
	);
}
interface SearhBoxProps {
	className?: string;
	onSearch: FormEventHandler<HTMLFormElement>;
}
