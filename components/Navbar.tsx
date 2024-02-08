"use client";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { Rubik } from "next/font/google";
import Image from "next/image";
import ShoppingCart from "./Cart";
import { useWindowDimensions } from "@/lib/useWindowDimensions";
import { ArrowRight, Plus } from "lucide-react";
import { motion } from "framer-motion";

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

function Navigation({
	name,
}: {
	name: (typeof links)[number]["name"] | "none";
}) {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [isCollapsed, setCollapsed] = useState(false);
	const dimensions = useWindowDimensions();

	useEffect(() => {
		setCollapsed((dimensions && dimensions.width <= 640) ?? false);
	}, [dimensions]);

	return isCollapsed ? (
		<div className="relative select-none">
			<div
				className="flex gap-2"
				onClick={() => setDrawerOpen(!drawerOpen)}
			>
				<motion.div
					animate={{
						rotateZ: drawerOpen ? 45 : 0,
					}}
				>
					<ArrowRight />
				</motion.div>
				<span
					className={`text-base tracking-widest ${boldRubik.className}`}
				>
					{name.toUpperCase()}
				</span>
			</div>
			<div className="absolute left-0 right-0 w-full text-center">
				<div
					className={
						"absolute -z-10 h-full w-full bg-black p-4 blur-xl " +
						(drawerOpen ? "block" : "hidden")
					}
				></div>
				{drawerOpen &&
					links
						.filter((link) => link.name !== name)
						.map((link) => (
							<Link
								className={`mt-1 block text-base tracking-widest ${lightRubik.className}`}
								key={link.name}
								href={link.href}
							>
								{link.name.toUpperCase()}
							</Link>
						))}
			</div>
		</div>
	) : (
		links.map((link) => {
			return (
				<Link key={link.name} href={link.href}>
					<span
						className={`text-base tracking-widest ${
							name == link.name
								? boldRubik.className
								: lightRubik.className
						}`}
					>
						{link.name.toUpperCase()}
					</span>
				</Link>
			);
		})
	);
}

export default function Navbar({
	name,
}: {
	name: (typeof links)[number]["name"] | "none";
}) {
	return (
		<>
			<div className="pointer-events-none fixed z-10 h-32 w-full bg-gradient-to-b from-black"></div>
			<div className="fixed z-20 grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4 p-4 py-8">
				<div className={"mr-auto flex w-full items-center gap-8 pl-4"}>
					<Navigation name={name} />
				</div>

				<Image
					src="/images/logos-theme-light.svg"
					alt="game day grill logo"
					width={187}
					height={31}
					className="flex aspect-[187/31] w-32 select-none"
				/>

				<ShoppingCart />
			</div>
		</>
	);
}
