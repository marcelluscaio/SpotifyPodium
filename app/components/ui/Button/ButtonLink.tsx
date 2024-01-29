import Link from "next/link";
import { ComponentProps, PropsWithChildren } from "react";
import "./style.scss";

type Props = {
	kind?: "primary" | "secondary";
} & ComponentProps<"a">;

export default function ButtonLink({ children }: PropsWithChildren<Props>) {
	return (
		<Link
			href=""
			className="button"
		>
			{children}
		</Link>
	);
}
