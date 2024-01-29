import Container from "../../ui/Container/Container";
import style from "./style.module.scss";

export default function Footer() {
	return (
		<footer className={`${style.footer} text--small`}>
			<Container>
				<p>
					Created by <a href="https://www.caiodeveloper.ca/">Caio Cabral</a> using
					Next.js and Sass.
				</p>
			</Container>
		</footer>
	);
}
