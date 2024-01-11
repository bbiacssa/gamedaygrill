import Boss from "@/public/images/boss.jpg";
import Chef from "@/public/images/chef.jpg";
import Intern from "@/public/images/intern.jpg";
import Waiter from "@/public/images/waiter.jpg";
import { Flame, Leaf } from "lucide-react";
import { StaticImageData } from "next/image";

export const Modifiers = {
	spicy: <Flame className="stroke-red-400" aria-label="spicy" />,
	vegetarian: <Leaf className="stroke-green-400" aria-label="vegetarian" />,
} as const;

export type MenuItem = {
	name: string;
	description: string;
	price: number;
	modifiers?: (keyof typeof Modifiers)[];
};

type Member = {
	image: StaticImageData;
	name: string;
	details: string;
	/** if the image is aligned incorrectly, use a tailwind css class to align */
	align?: string;
};

export const members: Member[] = [
	{
		image: Boss,
		name: "Timqmashhaay",
		details: "something about jane",
	},
	{
		image: Chef,
		name: "Versagenskind",
		details: "something about john",
		align: "bg-top",
	},
	{
		image: Intern,
		name: "Unbezahlteskind",
		details: "something about john",
	},
	{
		image: Waiter,
		name: "フードドロッパー",
		details: "something about john",
	},
];

import Pizza from "@/public/images/pizza.jpg";
import GrilledFood from "@/public/images/grilled food.jpg";

export const Menu: {
	name: string;
	image: StaticImageData;
	description: string;
	items: MenuItem[];
}[] = [
	{
		name: "Pita Bread Pizzas",
		image: Pizza,
		description: "A selection of our finest pita bread pizzas.",
		items: [
			{
				name: "Buffalo Chicken",
				description:
					"A spicy buffalo with fresh-baked pita bread, juicy pan-seared chicken, and fresh mozzarella cheese.",
				price: 12,
				modifiers: ["spicy"],
			},
			{
				name: "BBQ Chicken",
				description:
					"Our sweet and tangy barbeque sauce, fresh-baked pita bread, juicy pan-seared chicken, and fresh mozzarella cheese.",
				price: 11.5,
			},
			{
				name: "Mediterranean",
				description:
					"A garlic butter sauce paired with fresh-baked pita bread, artichokes, olives, and sun-dried tomatoes, and fresh mozzarella cheese.",
				price: 8,
				modifiers: ["vegetarian"],
			},
			{
				name: "Margherita",
				description:
					"Fresh Tomato sauce, fresh-baked pita bread paired with fresh mozzarella cheese, thick juicy slices of tomato, and garnished with basil.",
				price: 10,
			},
		],
	},
	{
		name: "straight from the grill",
		description: "A selection of our finest grilled foods.",
		image: GrilledFood,
		items: [
			{
				name: "Brisket",
				description:
					"Juicy, tender, and smoked to perfection, our brisket is sure to please.",
				price: 10,
			},
			{
				name: "Pulled Pork",
				description:
					"Our pulled pork is smoked to perfection, served with a side of our signature barbeque sauce.",
				price: 9,
			},
		],
	},
] as const;

import Party from "@/public/images/party.jpg";
import Love from "@/public/images/love.jpg";
import SuperBowl from "@/public/images/super bowl.jpg";
import { Libre_Baskerville } from "next/font/google";

type Event = {
	name: string;
	description: string;
	image: StaticImageData;
	month:
		| "jan"
		| "feb"
		| "mar"
		| "apr"
		| "may"
		| "jun"
		| "jul"
		| "aug"
		| "sep"
		| "oct"
		| "nov"
		| "dec";
	day: number;
	align?: string;
};

export const Events: Event[] = [
	{
		name: "new years celebration",
		description:
			"come celebrate the new year here with us at game day grill!",
		image: Party,
		month: "jan",
		day: 1,
	},
	{
		name: "super bowl",
		description:
			"help us live up to our name by watching american football with us",
		image: SuperBowl,
		month: "feb",
		day: 11,
	},
	{
		name: "valentines day",
		description: "bring a loved one with you to celebrate valentines day",
		image: Love,
		month: "feb",
		day: 14,
	},
];

export const Libre = Libre_Baskerville({
	subsets: ["latin"],
	weight: "400"
})