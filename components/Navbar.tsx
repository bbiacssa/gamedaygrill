"use client";
import Link from "next/link";
import React from "react";
import { Rubik } from "next/font/google";
import Image from "next/image";
import ShoppingCart from "./Cart";

const lightRubik = Rubik({
	subsets: ["latin"],
	weight: "300",
});

const boldRubik = Rubik({
	subsets: ["latin"],
	weight: "700",
});

export const links = [
	{ name: "about", href: "/" },
	{ name: "menu", href: "/menu" },
	{ name: "events", href: "/events" },
] as const;

export default function Navbar({
	name,
}: {
	name: (typeof links)[number]["name"];
}) {
	return (
		<>
			<div className="pointer-events-none absolute top-0 w-full h-32 bg-gradient-to-b from-black z-10"></div>
			<div className="absolute top-0 w-full grid grid-cols-[1fr_auto_1fr] p-4 py-8 z-20 gap-4 items-center">
				<div className={"pl-4 items-center mr-auto w-full flex gap-8"}>
					{links.map((link) => {
						return (
							<Link key={link.name} href={link.href}>
								<span
									className={`tracking-widest text-base ${
										name == link.name
											? boldRubik.className
											: lightRubik.className
									}`}
								>
									{link.name.toUpperCase()}
								</span>
							</Link>
						);
					})}
				</div>

				<Image
					src="/images/logos-theme-light.svg"
					alt="game day grill logo"
					width={187}
					height={31}
					className="flex aspect-[187/31] w-32"
				/>

				<ShoppingCart />
			</div>
		</>
	);
}
