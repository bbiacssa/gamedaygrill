import { Menu } from "@/app/config";
import React, { LegacyRef, RefObject, useEffect } from "react";
import { Londrina_Solid } from "next/font/google";
import MenuItem from "./MenuItem";
import { useOnScreen } from "@/app/menu/page";
const Londrina = Londrina_Solid({ subsets: ["latin"], weight: "400" });

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
	console.log(categoryItem.name, onScreen);
	useEffect(() => {
		setOnScreen(categoryItem.name, onScreen);
	}, [onScreen]);

	return (
		<div
			key={categoryItem.name}
			className={
				"mt-16 " +
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
