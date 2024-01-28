import { PropsWithChildren } from "react";
import style from "./style.module.scss";

type Props = {
	level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	size: "big" | "small";
	align?: "center" | "left";
};

export default function Title({
	level,
	size,
	align = "center",
	children,
}: PropsWithChildren<Props>) {
	const Tag = level;
	return (
		<Tag className={`${style.title} ${style[align]} title--${size} `}>
			{children}
		</Tag>
	);
}
