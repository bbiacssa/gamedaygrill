"use client";
import React, { useContext } from "react";
import { Button } from "./ui/button";
import {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogTitle,
	AlertDialogDescription,
	AlertDialogCancel,
	AlertDialogAction,
	AlertDialogHeader,
	AlertDialogFooter,
} from "./ui/alert-dialog";
import { ScrollArea } from "./ui/scroll-area";
import { RotateCw, ShoppingCart, X } from "lucide-react";
import { toast } from "sonner";
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from "./ui/sheet";
import { CartContext } from "./CartContext";
import { useRouter } from "next/navigation";

export default function Cart() {
	const [isLoading, setLoading] = React.useState(false);
	const router = useRouter();
	function checkout() {
		if (isLoading) return;
		setLoading(true);

		fetch("/create-checkout-session", {
			body: JSON.stringify(items),
			method: "POST",
		}).then(async (res) => {
			if (res?.status == 200) {
				const body: {
					url: string;
				} = await res.json();
				// redirect to the url
				console.log(body.url);
				router.replace(body.url);
			}
		});
	}

	const { items, removeItem } = useContext(CartContext);

	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className="absolute right-8 -z-10 grid size-12 cursor-pointer place-items-center rounded-md bg-zinc-700 transition-all hover:bg-zinc-800 active:scale-95">
					<ShoppingCart size={24} />
					{items.length > 0 && (
						<div className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-red-700 text-sm">
							<span>
								{items.reduce((a, b) => a + b.quantity, 0)}
							</span>
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
							{items.map((currentItem, index) => {
								return (
									<AlertDialog key={index}>
										<AlertDialogTrigger asChild>
											<div
												key={index}
												className="group my-3 flex cursor-pointer select-none items-center justify-between transition-transform duration-300 active:scale-95"
											>
												<div>
													<div className="flex items-center gap-2">
														<h1 className="text-lg font-bold text-white">
															{currentItem.quantity >
															1
																? currentItem.quantity +
																	"x " +
																	currentItem
																		.item
																		.name
																: currentItem
																		.item
																		.name}
														</h1>
														<X
															strokeWidth={3}
															className="mr-2 size-4 stroke-red-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
														/>
													</div>

													<h2 className="mr-4 text-sm font-light">
														{
															currentItem.item
																.description
														}
													</h2>
												</div>

												<h3 className="text-sm font-bold text-white">
													$
													{(
														currentItem.item.price *
														currentItem.quantity
													).toFixed(2)}
												</h3>
											</div>
										</AlertDialogTrigger>
										<AlertDialogContent>
											<AlertDialogHeader>
												<AlertDialogTitle>
													Are you sure?
												</AlertDialogTitle>
												<AlertDialogDescription>
													This will remove{" "}
													{currentItem.item.name} from
													your cart. This cannot be
													undone.
												</AlertDialogDescription>
											</AlertDialogHeader>
											<AlertDialogFooter>
												<AlertDialogCancel>
													Cancel
												</AlertDialogCancel>
												<AlertDialogAction
													onClick={() => {
														if (
															removeItem(
																currentItem.item
																	.name
															)
														) {
															toast.success(
																`removed ${currentItem.item.name} from cart`
															);
														} else {
															toast.error(
																`couldn't remove ${currentItem.item.name} from cart`
															);
														}
													}}
												>
													Continue
												</AlertDialogAction>
											</AlertDialogFooter>
										</AlertDialogContent>
									</AlertDialog>
								);
							})}
						</ScrollArea>
						<h1>
							subtotal:{" "}
							<span className="font-bold">
								$
								{items
									.reduce(
										(a, b) => a + b.item.price * b.quantity,
										0
									)
									.toFixed(2)}
							</span>
						</h1>
						<Button
							className="w-full"
							disabled={isLoading}
							onClick={checkout}
						>
							{isLoading && (
								<RotateCw className="mr-2 size-4 animate-spin" />
							)}
							checkout
						</Button>
					</div>
				) : (
					<h1>you don&apos;t have anything in your cart!</h1>
				)}
			</SheetContent>
		</Sheet>
	);
}
