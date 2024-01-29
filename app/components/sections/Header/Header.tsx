import Link from "next/link";
import style from "./style.module.scss";
import Container from "../../ui/Container/Container";
export default function Header() {
	return (
		<header className={`${style.header} title--small`}>
			<Container>
				<Link href={"/"}>Spodiumfy</Link>
			</Container>
		</header>
	);
}
