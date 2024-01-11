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
				<div className="hover:bg-zinc-800 active:scale-95 right-8 rounded-md size-12 absolute grid place-items-center bg-zinc-700 transition-all cursor-pointer">
					<ShoppingCart size={24} />
					{items.length > 0 && (
						<div className="absolute text-sm -right-2 -top-2 size-6 bg-red-700 rounded-full grid place-items-center">
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
												className="flex active:scale-95 transition-transform duration-300 cursor-pointer select-none group my-3 justify-between items-center"
											>
												<div>
													<div className="flex items-center gap-2">
														<h1 className="text-lg text-white font-bold">
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
															className="opacity-0 group-hover:opacity-100 duration-300 transition-opacity size-4 stroke-red-400 mr-2"
														/>
													</div>

													<h2 className="mr-4 text-sm font-light">
														{
															currentItem.item
																.description
														}
													</h2>
												</div>

												<h3 className="font-bold text-sm text-white">
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
								<RotateCw className="animate-spin mr-2 size-4" />
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
