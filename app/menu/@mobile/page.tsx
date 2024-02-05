"use client";
import { Menu } from "@/app/config";
import Category from "@/components/Category";
import Navbar from "@/components/Navbar";
import {
	useScroll,
	motion,
	useTransform,
	useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import React from "react";

export default function page() {
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		console.log("Page scroll: ", latest);
	});

	return (
		<div>
			<Navbar name="menu" />
			{Menu.map((item, key) => (
				<div key={key}>
					<motion.div className="relative h-36">
						<Image
							src={item.image}
							alt={item.name}
							priority={true}
							className="h-full object-cover object-center"
						/>
					</motion.div>
				</div>
			))}
		</div>
	);
}
