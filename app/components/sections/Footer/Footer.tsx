import style from "./style.module.scss";

export default function Footer() {
	return (
		<footer className={`${style.footer} text--small`}>
			<p>
				Created by <a href="https://www.caiodeveloper.ca/">Caio Cabral</a> using
				Next.js and Sass.
			</p>
		</footer>
	);
}
