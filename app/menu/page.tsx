"use client";
import { CartContext } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import { useContext, useState } from "react";
import { Menu, Libre, Modifiers } from "@/app/config";
import Image from "next/image";
import { Libre_Baskerville, Londrina_Solid } from "next/font/google";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

const Londrina = Londrina_Solid({ subsets: ["latin"], weight: "400" });
const ItalicLibre = Libre_Baskerville({
	subsets: ["latin"],
	weight: "400",
	style: "italic",
});
export default function MenuComponent() {
	if (!Menu) throw new Error("Menu not found");
	const { items, addItem, removeItem } = useContext(CartContext);
	const [category, setCategory] = useState<(typeof Menu)[number]>(Menu[0]);
	return (
		<div className="h-screen overflow-hidden">
			<Navbar name="menu" />
			<div className="grid grid-cols-2 w-full h-full">
				<Image
					className="h-full w-full object-cover"
					src={category.image}
					alt={category.name}
				/>
				<ScrollArea className="px-16">
					{Menu.map((categoryItem) => {
						return (
							<div
								key={categoryItem.name}
								className={
									"mt-16 " +
									(categoryItem.name !== category.name
										? "opacity-50"
										: "")
								}
							>
								<h1
									className={Londrina.className + " text-6xl"}
								>
									{categoryItem.name.toLowerCase()}
								</h1>
								<p className="tracking-widest text-2xl font-light mt-4 mb-8">
									{categoryItem.description.toLowerCase()}
								</p>
								{categoryItem.items.map((item) => {
									return (
										<div key={item.name}>
											<hr className="border border-white" />
											<div
												key={item.name}
												className="select-none"
											>
												<div
													key={item.name}
													className="p-2 py-4"
												>
													<div className="flex items-center gap-2">
														<h1
															className={
																Libre.className +
																" text-2xl font-bold tracking-wider"
															}
														>
															{item.name.toLowerCase()}
														</h1>
														{item.modifiers?.map(
															(item) => {
																return (
																	<Tooltip
																		key={
																			item
																		}
																	>
																		<TooltipTrigger
																			asChild
																		>
																			{
																				Modifiers[
																					item
																				]
																			}
																		</TooltipTrigger>
																		<TooltipContent>
																			{
																				item
																			}
																		</TooltipContent>
																	</Tooltip>
																);
															}
														)}
														<Button
															variant={"ghost"}
															size="icon"
															className="size-8 p-1"
															onClick={() => {
																if (
																	addItem(
																		item
																	)
																) {
																	toast.success(
																		`added ${item.name} to cart`
																	);
																} else {
																	toast.error(
																		`couldn't add ${item.name} to cart`
																	);
																}
															}}
														>
															<Plus />
														</Button>
														<Button
															className={
																"size-8 p-1 transition-opacity duration-300 " +
																(items.some(
																	(
																		currentItem
																	) =>
																		currentItem
																			.item
																			.name ==
																		item.name
																)
																	? "opacity-100"
																	: "opacity-0")
															}
															size="icon"
															disabled={
																!items.some(
																	(
																		currentItem
																	) =>
																		currentItem
																			.item
																			.name ==
																		item.name
																)
															}
															onClick={() => {
																if (
																	removeItem(
																		item.name
																	)
																) {
																	toast.success(
																		`removed ${item.name} from cart`
																	);
																} else {
																	toast.error(
																		`unable to remove ${item.name} from cart`
																	);
																}
															}}
															variant="ghost"
														>
															<Minus className="w-full h-full" />
														</Button>
														<p
															className={
																"font-bold text-xl ml-auto tracking-wider italic " +
																ItalicLibre.className
															}
														>
															{item.price}
														</p>
													</div>
													<p className="text-lg font-light tracking-wide mt-1">
														{item.description.toLowerCase()}
													</p>
												</div>
											</div>
										</div>
									);
								})}
								<hr className="border border-white" />
							</div>
						);
					})}
				</ScrollArea>
			</div>
		</div>
	);
}
