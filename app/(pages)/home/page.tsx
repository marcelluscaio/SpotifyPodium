import { cookies } from "next/headers";
import Image from "next/image";
import style from "./style.module.scss";
import Title from "@/app/components/ui/Title/Title";
import { redirect } from "next/navigation";

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
	const result = await fetch("https://api.spotify.com/v1/me", {
		method: "GET",
		headers: { Authorization: `Bearer ${token}` },
	});

	return await result.json();
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
		/* console.log(profile); */
		/* console.log(artists); */
		/* console.log(tracks); */
		return (
			<div>
				<Title
					level="h1"
					size="big"
				>
					Hello, {profile.display_name}
				</Title>

				{
					<Image
						className={style.profileImage}
						src={profile.images[1].url}
						alt=""
						width="300"
						height="300"
					/>
				}
				<Title
					level="h2"
					size="small"
				>
					Your top artists
				</Title>
				{artists.items.map((artist) => (
					<div key={artist.name}>
						<Image
							src={artist.images[1].url}
							alt=""
							width="300"
							height="300"
						/>
						<p>{artist.name}</p>
					</div>
				))}
				<Title
					level="h2"
					size="small"
				>
					Your top tracks
				</Title>
				{tracks.items.map((track) => (
					<div key={track.name}>
						<Image
							src={track.album.images[1].url}
							alt=""
							width="300"
							height="300"
						/>

						<p>{track.name}</p>
					</div>
				))}
			</div>
		);
	} catch (error) {
		redirect("/login");
	}
}
