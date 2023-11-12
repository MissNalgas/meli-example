export default function TextInput(props : TextInputProps) {


	return (
		<input
			className="p-2 focus:outline-secondary h-10 w-full text-xgray"
			{...props}
		/>
	);
}

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	icon?: () => React.ReactNode;
}
