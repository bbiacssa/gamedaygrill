"use client";
import { CartContext } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import { useContext } from "react";

export type MenuItem = {
	name: string;
	description: string;
	price: number;
	largePrice?: number;
	vegetarian?: boolean;
	spicy?: boolean;
};

export default function Menu() {
	const { items, setItems } = useContext(CartContext);
	return (
		<>
			<Navbar name="menu" />
			<button
				className="p-3 bg-zinc-800"
				onClick={() => {
					setItems([
						...items,
						{
							name: "test",
							description: "testing",
							price: 5,
						},
					]);
				}}
			>
				add crap to the cart
			</button>
		</>
	);
}
