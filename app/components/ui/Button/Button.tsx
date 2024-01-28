import { ComponentProps, PropsWithChildren } from "react";
import "./style.scss";

type Props = {
	kind?: "primary" | "secondary";
} & ComponentProps<"button">;

export default function Button({
	disabled = false,
	type = "button",
	children,
}: PropsWithChildren<Props>) {
	return (
		<button
			disabled={disabled}
			type={type}
			className="button"
		>
			{children}
		</button>
	);
}
