import { getCode } from "@/app/helper/getCode";

export const dynamic = "force-dynamic";

export async function GET() {
	await getCode();
}
