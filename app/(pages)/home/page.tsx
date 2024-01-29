import { cookies } from "next/headers";
import Image from "next/image";
import style from "./style.module.scss";
import Title from "@/app/components/ui/Title/Title";
import { redirect } from "next/navigation";
import Container from "@/app/components/ui/Container/Container";

type Response<Type> = {
	items: Type[];
};
type Artist = {
	name: string;
	images: { url: string }[];
};

type Track = {
	name: string;
	album: {
		images: { url: string }[];
	};
};

async function fetchProfile(token: string): Promise<any> {
	try {
		const result = await fetch("https://api.spotify.com/v1/me", {
			method: "GET",
			headers: { Authorization: `Bearer ${token}` },
		});

		return await result.json();
	} catch (error) {
		console.log("entrou no catch");
		console.log(error);
	}
}

async function fetchArtists(token: string): Promise<Response<Artist>> {
	const result = await fetch("https://api.spotify.com/v1/me/top/artists", {
		method: "GET",
		headers: { Authorization: `Bearer ${token}` },
	});

	return await result.json();
}

async function fetchTracks(token: string): Promise<Response<Track>> {
	const result = await fetch("https://api.spotify.com/v1/me/top/tracks", {
		method: "GET",
		headers: { Authorization: `Bearer ${token}` },
	});

	return await result.json();
}

export default async function Home() {
	try {
		const token = cookies().get("token")!.value;
		const profile = await fetchProfile(token);

		const artists = await fetchArtists(token);
		const tracks = await fetchTracks(token);

		return (
			<Container
				tag="main"
				className={style.main}
			>
				<div className={style.user}>
					<Title
						level="h1"
						size="big"
					>
						Hello, {profile.display_name}
					</Title>

					{
						<img
							className={style.profileImage}
							src={profile.images[1].url}
							alt=""
							width="300"
							height="300"
						/>
					}
				</div>
				<section className={style.artists}>
					<Title
						level="h2"
						size="small"
					>
						Your top artists
					</Title>
					<div className={style.grid}>
						{artists.items.map((artist) => (
							<div key={artist.name}>
								<img
									src={artist.images[1].url}
									alt=""
									width="300"
									height="300"
								/>
								<p className="text--small">{artist.name}</p>
							</div>
						))}
					</div>
				</section>
				<section>
					<Title
						level="h2"
						size="small"
					>
						Your top tracks
					</Title>
					<div className={style.grid}>
						{tracks.items.map((track) => (
							<div key={track.name}>
								<img
									src={track.album.images[1].url}
									alt=""
									width="300"
									height="300"
								/>

								<p className="text--small">{track.name}</p>
							</div>
						))}
					</div>
				</section>
			</Container>
		);
	} catch (error) {
		redirect("/login");
	}
}
