export async function getToken(code: string, redirect_uri: string) {
	const headers = new Headers();
	headers.append("content-type", "application/x-www-form-urlencoded");
	headers.append(
		"Authorization",
		"Basic " +
			Buffer.from(
				process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET
			).toString("base64")
	);

	const requestInformation = {
		method: "POST",
		headers: headers,
		json: true,
	};

	const paramsObj = {
		grant_type: "authorization_code",
		code: code,
		redirect_uri: redirect_uri,
	};

	const response = await fetch(
		"https://accounts.spotify.com/api/token?" + new URLSearchParams(paramsObj),
		requestInformation
	);

	const { access_token } = await response.json();

	return access_token;
}

/* ENHANCEMENT AFTER USING  new URLSearchParams */
/* const data = {
		method: "POST",
		headers: {
			"content-type": "application/x-www-form-urlencoded",
			Authorization:
				"Basic " +
				Buffer.from(
					process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET
				).toString("base64"),
		},
		json: true,
	};

	const response = await fetch(
		"https://accounts.spotify.com/api/token?grant_type=authorization_code&code=" +
			code +
			"&redirect_uri=" +
			redirect_uri,
		data
	);
	const token = await response.json(); */

/* ENHANCEMENT AFTER USING HEADERS CONSTRUCTOR */
/* {
			"content-type": "application/x-www-form-urlencoded",
			Authorization:
				"Basic " +
				Buffer.from(
					process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET
				).toString("base64"),
		} */
