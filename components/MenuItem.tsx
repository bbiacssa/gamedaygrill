import { Libre, MenuItem, Modifiers } from "@/app/config";
import React, { useContext } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { Libre_Baskerville } from "next/font/google";
import { CartContext } from "./CartContext";
import { toast } from "sonner";
import { Minus, Plus } from "lucide-react";

const ItalicLibre = Libre_Baskerville({
	subsets: ["latin"],
	weight: "400",
	style: "italic",
});

export default function MenuItem({ item }: { item: MenuItem }) {
	const { items, addItem, removeItem } = useContext(CartContext);

	return (
		<div key={item.name}>
			<hr className="border border-white" />
			<div key={item.name} className="select-none">
				<div key={item.name} className="p-2 py-6">
					<div className="flex items-center gap-2">
						<h4
							className={
								Libre.className +
								" text-2xl font-bold tracking-wider"
							}
						>
							{item.name.toLowerCase()}
						</h4>
						{item.modifiers?.map((item) => {
							return (
								<Tooltip key={item}>
									<TooltipTrigger asChild>
										{Modifiers[item]}
									</TooltipTrigger>
									<TooltipContent>{item}</TooltipContent>
								</Tooltip>
							);
						})}
						<Button
							aria-label={`add ${item.name} to cart`}
							variant={"ghost"}
							size="icon"
							className="size-8 p-1"
							onClick={() => {
								if (addItem(item)) {
									toast.success(`added ${item.name} to cart`);
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
							aria-label={`remove ${item.name} from cart`}
							className={
								"size-8 p-1 transition-opacity duration-300 " +
								(items.some(
									(currentItem) =>
										currentItem.item.name == item.name
								)
									? "opacity-100"
									: "opacity-0")
							}
							size="icon"
							aria-hidden={
								!items.some(
									(currentItem) =>
										currentItem.item.name == item.name
								)
							}
							disabled={
								!items.some(
									(currentItem) =>
										currentItem.item.name == item.name
								)
							}
							onClick={() => {
								if (removeItem(item.name)) {
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
							<Minus className="h-full w-full" />
						</Button>
						<p
							aria-label={item.price + " dollars"}
							className={
								"ml-auto text-xl font-bold italic tracking-wider " +
								ItalicLibre.className
							}
						>
							{item.price}
						</p>
					</div>
					{item.description && (
						<p className="mt-1 text-lg font-light tracking-wide">
							{item.description.toLowerCase()}
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
