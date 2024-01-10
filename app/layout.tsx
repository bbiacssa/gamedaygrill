import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import CartContext from "@/components/CartContext";
import { ScrollArea } from "@/components/ui/scroll-area";

const font = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "game day grill",
	description: "a modern twist on a game day classic.",
	openGraph: {
		title: "game day grill",
		description: "a modern twist on a game day classic.",
		siteName: "game day grill",
		locale: "en_US",
		type: "website",
	},
	metadataBase: new URL("https://gamedaygrill-zeta.vercel.app"),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<CartContext>
				<body className={font.className + " dark bg-gunmetal"}>
					<ScrollArea className="w-screen h-screen">
						{children}
					</ScrollArea>
				</body>
			</CartContext>
		</html>
	);
}
