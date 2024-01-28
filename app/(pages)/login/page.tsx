import Button from "@/app/components/ui/Button/Button";
import Title from "@/app/components/ui/Title/Title";
import style from "./style.module.scss";

export default async function Login() {
	return (
		<main className={style.main}>
			<Title
				level="h1"
				size="big"
			>
				Welcome to Spodiumfy!
			</Title>
			<Title
				level="h2"
				size="small"
			>
				Discover your favorite artists and songs!
			</Title>
			<form action={"/api/auth"}>
				<Button type="submit">Login</Button>
			</form>
		</main>
	);
}
