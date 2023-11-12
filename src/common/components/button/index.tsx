import { ButtonHTMLAttributes } from "react";

export default function Button({children, className} : ButtonProps) {
	return (
		<button className={"rounded bg-secondary text-lg text-white w-full h-12 hover:bg-secondary-200 transition"+" "+className}>
			{children}
		</button>
	);
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
