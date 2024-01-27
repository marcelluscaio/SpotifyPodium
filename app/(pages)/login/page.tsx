export default async function Login() {
	return (
		<main>
			<h1>Welcome to Spodiumfy!</h1>
			<form action={"/api/auth"}>
				<button type="submit">Login</button>
			</form>
		</main>
	);
}
