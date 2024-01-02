import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { MenuItem } from "./menu/page";
import { createContext, useState } from "react";
import CartContext from "@/components/CartContext";

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
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<CartContext>
				<body className={font.className + " dark"}>{children}</body>
			</CartContext>
		</html>
	);
}
