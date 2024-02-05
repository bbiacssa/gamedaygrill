"use client";
import { Menu } from "@/app/config";
import Navbar from "@/components/Navbar";
import MenuItem from "@/components/MenuItem";
import {
	useScroll,
	useTransform,
	useMotionValueEvent,
	useSpring,
} from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { Londrina_Solid } from "next/font/google";

const Londrina = Londrina_Solid({
	weight: "900",
	subsets: ["latin"],
});

export default function Page() {
	const [scroll, setScroll] = useState<number>(0.4);
	const { scrollYProgress } = useScroll();
	const clampedYProgress = useTransform(scrollYProgress, [0, 1], [0.3, 0.7]);
	const springYProgress = useSpring(clampedYProgress, {
		bounce: 0.1,
	});

	useMotionValueEvent(springYProgress, "change", (latest) => {
		setScroll(latest);
	});

	return (
		<div>
			<Navbar name="menu" />
			{Menu.map((item, key) => (
				<div key={key}>
					<div className="justify relative flex h-36 flex-col justify-end overflow-hidden p-4">
						<Image
							src={item.image}
							alt={item.name}
							style={{
								objectPosition: `50% ${scroll * 100}%`,
							}}
							priority={true}
							className="absolute left-0 top-0 -z-10 h-full w-full object-cover opacity-50 blur-sm"
						/>
						<h1
							className={
								Londrina.className + " text-5xl tracking-wide"
							}
						>
							{item.name.toLowerCase()}
						</h1>
						<p className="text-lg tracking-wider">
							{item.description.toLowerCase()}
						</p>
					</div>
					<div className="p-4">
						{item.items.map((menuItem) => {
							return (
								<MenuItem key={menuItem.name} item={menuItem} />
							);
						})}
					</div>
				</div>
			))}
		</div>
	);
}
