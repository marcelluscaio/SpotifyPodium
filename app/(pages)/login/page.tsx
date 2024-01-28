import Button from "@/app/components/ui/Button/Button";
import Title from "@/app/components/ui/Title/Title";

export default async function Login() {
	return (
		<main>
			<Title
				level="h1"
				size="big"
			>
				Welcome to Spodiumfy!
			</Title>
			<form action={"/api/auth"}>
				<Button type="submit">Login</Button>
			</form>
		</main>
	);
}
