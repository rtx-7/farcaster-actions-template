import { getFrameMetadata } from "@coinbase/onchainkit";
import type { Metadata } from "next";
import { NEXT_PUBLIC_URL } from "./config";

const frameMetadata = getFrameMetadata({
	buttons: [
		{
			label: "send",
		},
	],
	image: {
		src: `${NEXT_PUBLIC_URL}/init.jpeg`,
		aspectRatio: "1:1",
	},
	input: {
		text: "text",
	},
	post_url: `${NEXT_PUBLIC_URL}/api/action`,
});

export const metadata: Metadata = {
	title: "title",
	description: "description",
	openGraph: {
		title: "title",
		description: "description",
		images: [`${NEXT_PUBLIC_URL}/init.jpeg`],
	},
	other: {
		...frameMetadata,
	},
};

export default function Page() {
	return (
		<>
			<h1>Heading</h1>
		</>
	);
}
