import { getCode } from "@/app/helper/getCode";

export async function GET() {
	await getCode();
}
