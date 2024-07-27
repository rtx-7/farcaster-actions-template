import { FrameRequest, getFrameMessage } from "@coinbase/onchainkit";
import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse> {
	const body: FrameRequest = await req.json();
	const { isValid, message } = await getFrameMessage(body, {
		neynarApiKey: "NEYNAR_ONCHAIN_KIT",
	});

	if (!isValid) {
		return new NextResponse("Message not valid", { status: 500 });
	}
	// Get the current date and time
	const now = new Date();
	const date = now.toLocaleDateString();
	const time = now.toLocaleTimeString();

	// Format them as a string
	const dateTime = `${date} ${time} UTC`;

	return NextResponse.json({ message: getcast() }, { status: 200 });
}

export async function POST(req: NextRequest): Promise<Response> {
	console.log("POST");
	return getResponse(req);
}

export async function GET(req: NextRequest): Promise<Response> {
	console.log("GET");
	return getResponse(req);
}

export const dynamic = "force-dynamic";
