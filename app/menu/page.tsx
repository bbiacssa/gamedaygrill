"use client";
import { CartContext } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import { useContext, useState } from "react";
import { Menu, MenuItem, Modifiers } from "@/app/config";
import Image from "next/image";
import { Libre_Baskerville, Londrina_Shadow } from "next/font/google";
import { Libre } from "@/app/page";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";

const Londrina = Londrina_Shadow({ subsets: ["latin"], weight: "400" });
const ItalicLibre = Libre_Baskerville({
	subsets: ["latin"],
	weight: "400",
	style: "italic",
});
export default function MenuComponent() {
	if (!Menu) throw new Error("Menu not found");
	const { items, addItem } = useContext(CartContext);
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
												onClick={() => {
													if (addItem(item)) {
														toast.success(
															`added ${item.name} to cart`
														);
													} else {
														toast.error(
															`couldn't add ${item.name} to cart`
														);
													}
												}}
												key={item.name}
												className="group cursor-pointer select-none duration-300 active:scale-95 transition-transform"
											>
												<div
													key={item.name}
													className="p-2 py-4"
												>
													<div className=" flex items-center gap-2">
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
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width="32"
															height="32"
															viewBox="0 0 32 32"
															fill="none"
															className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
														>
															<path
																d="M6.66667 16H25.3333"
																stroke="white"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
															<path
																d="M16 6.66669V25.3334"
																stroke="white"
																strokeWidth="2"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
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
