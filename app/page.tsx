import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function InitialPage() {
	const token = cookies().get("token")!.value;
	token !== "" && token !== undefined ? redirect("/home") : redirect("/login");
}
