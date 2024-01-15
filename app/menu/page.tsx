"use client";
import Navbar from "@/components/Navbar";
import { RefObject, createRef, useEffect, useMemo, useState } from "react";
import { Menu } from "@/app/config";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import Category from "@/components/Category";

export function useOnScreen(ref?: RefObject<HTMLElement>) {
	"use client";
	const [isIntersecting, setIntersecting] = useState(false);

	const observer = useMemo(() => {
		return new IntersectionObserver((entry) => {
			setIntersecting(entry[0].isIntersecting);
		});
	}, []);

	useEffect(() => {
		if (!ref?.current) return;
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return isIntersecting;
}

export default function MenuComponent() {
	if (!Menu) throw new Error("Menu not found");
	const refsMap = useMemo(() => {
		const refs = new Map<string, RefObject<HTMLElement>>();
		Menu.forEach((category) => {
			console.log(category.name);
			refs.set(category.name, createRef<HTMLDivElement>());
		});
		return refs;
	}, []);
	const [categoriesOnScreen, setCategoriesOnScreen] = useState<{
		[name: string]: boolean;
	}>(Object.fromEntries(Menu.map((category) => [category.name, false])));
	const [category, setCategory] = useState<(typeof Menu)[number]>(Menu[0]);

	useEffect(() => {
		// set current category to the first category that is on screen
		for (const [name, onScreen] of Object.entries(categoriesOnScreen)) {
			if (onScreen) {
				const category = Menu.find(
					(category) => category.name === name
				);
				if (category) setCategory(category);
				break;
			}
		}
	}, [categoriesOnScreen]);

	return (
		<div className="h-screen overflow-hidden">
			<Navbar name="menu" />
			<div className="grid grid-cols-5 w-full h-full">
				{Menu.map((categoryItem) => {
					return (
						<Image
							className={
								"h-full w-full col-span-2 object-cover " +
								(categoryItem.name == category.name
									? "block"
									: "hidden")
							}
							src={categoryItem.image}
							alt={categoryItem.name}
							key={categoryItem.name}
						/>
					);
				})}
				<ScrollArea className="px-12 col-span-3">
					{Menu.map((categoryItem) => {
						return (
							<Category
								category={category}
								categoryItem={categoryItem}
								categoryRef={refsMap.get(categoryItem.name)}
								setOnScreen={(name, onScreen) => {
									setCategoriesOnScreen((prev) => {
										return {
											...prev,
											[name]: onScreen,
										};
									});
								}}
								key={categoryItem.name}
							/>
						);
					})}
					<div className="h-16"></div>
				</ScrollArea>
			</div>
		</div>
	);
}
