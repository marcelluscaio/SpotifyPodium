import { redirect } from "next/navigation";
import { cookies } from "next/headers";
const token = cookies().get("token")!.value;

export default async function InitialPage() {
	token !== "" ? redirect("/home") : redirect("/login");
}
