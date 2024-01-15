"use client";
import { Menu } from "@/app/config";
import { LegacyRef, RefObject, useEffect, useMemo, useState } from "react";
import { Londrina_Solid } from "next/font/google";
import MenuItem from "./MenuItem";
const Londrina = Londrina_Solid({ subsets: ["latin"], weight: "400" });

function useOnScreen(ref?: RefObject<HTMLElement>) {
	"use client";
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		if (!ref?.current) return;
		const observer = new IntersectionObserver((entry) => {
			setIntersecting(entry[0].isIntersecting);
		});
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return isIntersecting;
}

export default function Category({
	categoryItem,
	category,
	categoryRef,
	setOnScreen,
}: {
	categoryItem: (typeof Menu)[number];
	category: (typeof Menu)[number];
	categoryRef?: RefObject<HTMLElement>;
	setOnScreen: (name: string, onScreen: boolean) => void;
}) {
	const onScreen = useOnScreen(categoryRef);
	useEffect(() => {
		setOnScreen(categoryItem.name, onScreen);
	}, [onScreen]);

	return (
		<div
			key={categoryItem.name}
			className={
				"first:mt-16 mt-24 " +
				(categoryItem.name !== category.name ? "opacity-50" : "")
			}
			ref={categoryRef as LegacyRef<HTMLDivElement>}
		>
			<h1 className={Londrina.className + " text-6xl"}>
				{categoryItem.name.toLowerCase()}
			</h1>
			<p className="tracking-widest text-2xl font-light mt-4 mb-8">
				{categoryItem.description.toLowerCase()}
			</p>
			{categoryItem.items.map((item) => {
				return <MenuItem key={item.name} item={item} />;
			})}
			<hr className="border border-white" />
		</div>
	);
}
