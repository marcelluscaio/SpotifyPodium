import { redirect } from "next/navigation";

const scope = "user-read-private user-read-email user-top-read";
const redirect_uri = process.env.REDIRECT_URI!;
export async function getCode() {
	redirect(
		`https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.SPOTIFY_CLIENT_ID}&scope=${scope}&redirect_uri=${redirect_uri}`
	);
}
