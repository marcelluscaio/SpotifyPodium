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
			<h1>Welcome to Spodiumfy!</h1>
			<form action={"/api/auth"}>
				<button type="submit">Login</button>
			</form>
		</main>
	);
}
