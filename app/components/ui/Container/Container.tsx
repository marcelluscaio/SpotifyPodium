import { PropsWithChildren, ComponentProps } from "react";
import style from "./style.module.scss";

type Tag = "div" | "section" | "main";

type ContainerProps = {
	tag?: Tag;
} & ComponentProps<Tag>;

export default function Container({
	tag = "div",
	className,
	children,
}: PropsWithChildren<ContainerProps>) {
	const Tag = tag;
	return <Tag className={`${style.container} ${className}`}>{children}</Tag>;
}
