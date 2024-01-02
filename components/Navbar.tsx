"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { Rubik } from "next/font/google";
import Image from "next/image";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "./CartContext";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";

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
	{ name: "contact", href: "/contact" },
	{ name: "reserve", href: "/reserve" },
] as const;

export default function Navbar({
	name,
}: {
	name: (typeof links)[number]["name"];
}) {
	const { items } = useContext(CartContext);
	return (
		<>
			<div className="absolute top-0 w-screen h-60 bg-gradient-to-b from-black -z-10"></div>
			<div className="grid grid-cols-[1fr_auto_1fr] p-4 py-8 gap-4 items-center">
				<div
					className={
						"pl-4 pr-48 items-center mr-auto w-full flex justify-between"
					}
				>
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
				<Sheet>
					<SheetTrigger asChild>
						<div className="hover:bg-zinc-800 active:scale-95 right-8 rounded-md size-12 absolute grid place-items-center bg-zinc-700 transition-all cursor-pointer">
							<ShoppingCart size={24} />
							{items.length > 0 && (
								<div className="absolute text-sm -right-2 -top-2 size-6 bg-red-700 rounded-full grid place-items-center">
									<span>{items.length}</span>
								</div>
							)}
						</div>
					</SheetTrigger>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>your cart</SheetTitle>
						</SheetHeader>
						{items.length > 0 ? (
							<div className="flex h-full flex-col gap-4 py-4">
								<ScrollArea className="flex-grow pr-4">
									{items.map((item) => {
										return (
											<div className="flex my-3 justify-between items-center">
												<div>
													<h1 className="text-lg text-white font-bold">
														{item.name}
													</h1>
													<h2>{item.description}</h2>
												</div>

												<h3 className="font-bold text-lg text-white">
													${item.price}
												</h3>
											</div>
										);
									})}
								</ScrollArea>
								<h1>
									subtotal:{" "}
									<span className="font-bold">
										$
										{items
											.reduce((a, b) => a + b.price, 0)
											.toFixed(2)}
									</span>
								</h1>
								<Link href="/checkout">
									<Button className="w-full">checkout</Button>
								</Link>
							</div>
						) : (
							<h1>you don't have anything in your cart!</h1>
						)}
					</SheetContent>
				</Sheet>
			</div>
		</>
	);
}

{
	/*  */
}
