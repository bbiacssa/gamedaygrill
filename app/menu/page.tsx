"use client";
import Navbar from "@/components/Navbar";
import { RefObject, createRef, useEffect, useMemo, useState } from "react";
import { Menu } from "@/app/config";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Category from "@/components/Category";

export default function MenuComponent() {
	if (!Menu) throw new Error("Menu not found");
	const refsMap = useMemo(() => {
		const refs = new Map<string, RefObject<HTMLElement>>();
		Menu.forEach((category) => {
			refs.set(category.name, createRef<HTMLDivElement>());
		});
		return refs;
	}, []);
	const [categoriesOnScreen, setCategoriesOnScreen] = useState<{
		[name: string]: boolean;
	}>(Object.fromEntries(Menu.map((category) => [category.name, false])));
	const [category, setCategory] = useState<(typeof Menu)[number]>(Menu[0]);
	const [previousCategory, setPreviousCategory] = useState<
		(typeof Menu)[number]
	>(Menu[0]);

	useEffect(() => {
		// set current category to the last one that is on screen
		if (categoriesOnScreen) {
			const entries = Object.entries(categoriesOnScreen);
			const lastIndexShown = entries.findLastIndex((entry) => entry[1]);
			if (!entries[lastIndexShown]) return;
			const categoryFromIndex = Menu.find(
				(category) => category.name == entries[lastIndexShown][0]
			);
			if (categoryFromIndex?.name != category.name) {
				console.log(
					`transitioning from ${category.name} to ${categoryFromIndex?.name}`
				);
				setPreviousCategory(category);
			}
			if (categoryFromIndex) setCategory(categoryFromIndex);
		}
	}, [categoriesOnScreen]);

	useEffect(() => {
		console.log(
			`current category: ${category.name}, previous category: ${previousCategory.name}`
		);
	}, [category]);

	return (
		<div className="h-screen overflow-hidden">
			<Navbar name="menu" />
			<div className="grid h-full w-full grid-cols-5">
				<div className="relative col-span-2">
					{Menu.map((categoryItem) => {
						return (
							<div key={categoryItem.name}>
								<motion.div
									initial={{
										y:
											previousCategory.name ==
											categoryItem.name
												? 0
												: category.name ==
													  categoryItem.name
													? "-100%"
													: "100%",
									}}
									animate={{
										y:
											categoryItem.name == category.name
												? 0
												: "100%",
									}}
									key={category.name}
									className={"absolute h-full w-full"}
								>
									<Image
										className={"h-full w-full object-cover"}
										src={categoryItem.image}
										alt={categoryItem.name}
										priority={true}
									/>
								</motion.div>
							</div>
						);
					})}
				</div>
				<ScrollArea className="col-span-3 h-screen px-12">
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
				</ScrollArea>
			</div>
		</div>
	);
}
