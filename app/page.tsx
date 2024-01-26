import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function InitialPage() {
	const token = cookies().get("token");
	if (token) {
		redirect("/home");
	} else {
		redirect("/login");
	}
}
