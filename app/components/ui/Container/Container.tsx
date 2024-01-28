import { PropsWithChildren, ComponentProps } from "react";
import style from "./style.module.scss";

type Tag = "div" | "section";

type ContainerProps = {
	tag?: Tag;
} & ComponentProps<Tag>;

export default function Container({
	tag = "div",
	children,
}: PropsWithChildren<ContainerProps>) {
	const Tag = tag;
	return <Tag className={style.container}>{children}</Tag>;
}
