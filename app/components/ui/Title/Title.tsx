import { PropsWithChildren } from "react";

type Props = {
	level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	size: "big" | "small";
};

export default function Title({ level, size, children }: PropsWithChildren<Props>) {
	const Tag = level;
	return <Tag className={`title--${size}`}>{children}</Tag>;
}
