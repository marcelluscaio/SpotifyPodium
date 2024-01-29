import Link from "next/link";
import style from "./style.module.scss";
export default function Header() {
	return (
		<header className={`${style.header} title--small`}>
			<Link href={"/"}>Spodiumfy</Link>
		</header>
	);
}
