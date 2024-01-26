import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { getToken } from "@/app/helper/getToken";

const redirect_uri = "http://localhost:3000/api/callback";
export async function GET(req: NextRequest, res: Response) {
	const code = req.nextUrl.searchParams.get("code") as string;

	const token = await getToken(code, redirect_uri);

	cookies().set("token", token);

	redirect("/");
}
