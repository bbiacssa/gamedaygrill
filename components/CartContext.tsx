"use client";
import { MenuItem } from "@/app/menu/page";
import { ReactNode, createContext, useState } from "react";

export const CartContext = createContext<{
	items: MenuItem[];
	setItems: (items: MenuItem[]) => void;
}>({
	items: [],
	setItems: () => {},
});

export default function CartContextComponent({
	children,
}: {
	children: ReactNode;
}) {
	const [items, setItems] = useState<MenuItem[]>([]);
	return (
		<CartContext.Provider value={{ items, setItems }}>
			{children}
		</CartContext.Provider>
	);
}
