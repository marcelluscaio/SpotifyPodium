export default async function Login() {
	return (
		<main>
			<h1>Faca login</h1>
			<form action={"/api/auth"}>
				<button type="submit">Faca login</button>
			</form>
		</main>
	);
}
