import Boss from "@/public/images/boss.jpg";
import Chef from "@/public/images/chef.jpg";
import Intern from "@/public/images/intern.jpg";
import Waiter from "@/public/images/waiter.jpg";
import { Flame, Leaf } from "lucide-react";
import { StaticImageData } from "next/image";

export const BASE_URL =
	process.env.NODE_ENV == "production"
		? "https://gamedaygrill-bpa.vercel.app"
		: "http://localhost:3000";

export const Modifiers = {
	spicy: <Flame className="stroke-red-400" aria-label="spicy" />,
	vegetarian: <Leaf className="stroke-green-400" aria-label="vegetarian" />,
} as const;

export type MenuItem = {
	/** this has to be unique otherwise the code will break :( */
	name: string;
	description?: string;
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
		name: "Kiera F.",
		details: "Brand Manager",
	},
	{
		image: Chef,
		name: "Kaleb N.",
		details: "Head Chef",
		align: "object-top",
	},
	{
		image: Intern,
		name: "Daniel M.",
		details: "Owner and Creator",
		align: "object-[50%_40%]",
	},
	{
		image: Waiter,
		name: "Isaac G.",
		details: "General Manager",
	},
];

import Pizza from "@/public/images/pizza.jpg";
import Wings from "@/public/images/wings.jpg";
import Sliders from "@/public/images/sliders.jpg";
import Tacos from "@/public/images/tacos.jpg";
import Nachos from "@/public/images/nachos.jpg";
import Lemonade from "@/public/images/lemonade.jpg";
import Dessert from "@/public/images/dessert.jpg";

export const Menu: {
	name: string;
	image: StaticImageData;
	description: string;
	items: MenuItem[];
}[] = [
	{
		name: "Appetizers",
		image: Nachos,
		description: "Pre-game Snacks",
		items: [
			{
				name: "7 Layer Nachos",
				description:
					"a great new twist on the classic 7 layers, these sharable nachos are adjourned with beans, sour cream, guacamole, cheese, green onions, olives, and tomatoes",
				price: 12,
				modifiers: ["vegetarian"],
			},
			{
				name: "Green Chile Queso",
				description:
					"This spicy and sharable 3-cheese queso is served with chips and will be enjoyed by the whole party",
				price: 10,
				modifiers: ["spicy", "vegetarian"],
			},
			{
				name: "Zucchini Chips",
				description:
					"Krispy breaded zucchini chips that have been covered in bread crumbs and air-fried to perfection. This delectable treat is served with a savory lemon yogurt dip",
				price: 8,
				modifiers: ["vegetarian"],
			},
			{
				name: "Jalapeno Poppers",
				description:
					"By including the crispy pits of bacon inside of the jalapeno along with sharp cheddar and cream cheese, the perfect pepper taste is now achievable in just one bite",
				price: 9,
				modifiers: ["spicy"],
			},
		],
	},
	{
		name: "Pita Bread Pizzas",
		image: Pizza,
		description: "A selection of our finest pita bread pizzas",
		items: [
			{
				name: "Buffalo Chicken",
				description:
					"A spicy buffalo with fresh-baked pita bread, juicy pan-seared chicken, and fresh mozzarella cheese",
				price: 12,
				modifiers: ["spicy"],
			},
			{
				name: "BBQ Chicken",
				description:
					"Our sweet and tangy barbeque sauce, fresh-baked pita bread, juicy pan-seared chicken, and fresh mozzarella cheese",
				price: 11.5,
			},
			{
				name: "Mediterranean",
				description:
					"A garlic butter sauce paired with fresh-baked pita bread, artichokes, olives, and sun-dried tomatoes, and fresh mozzarella cheese",
				price: 8,
				modifiers: ["vegetarian"],
			},
			{
				name: "Margherita",
				description:
					"Fresh Tomato sauce, fresh-baked pita bread paired with fresh mozzarella cheese, thick juicy slices of tomato, and garnished with basil",
				price: 10,
				modifiers: ["vegetarian"],
			},
		],
	},
	{
		name: "Straight from the Grill",
		description: "A selection of our finest grilled foods",
		image: Wings,
		items: [
			{
				name: "Brisket",
				description:
					"Juicy, tender, and smoked to perfection, our brisket is sure to please",
				price: 10,
			},
			{
				name: "Pulled Pork",
				description:
					"Our pulled pork is smoked to perfection, served with a side of our signature barbeque sauce",
				price: 9,
			},
			{
				name: "Ribs",
				description:
					"Coated in our signature barbeque sauce, our ribs are a must-try",
				price: 11,
			},
			{
				name: "Chicken Wings",
				description:
					"Crispy and fried to perfection, these wings will have you coming back for more",
				price: 9,
			},
		],
	},
	{
		name: "Entrees",
		image: Tacos,
		description: "A selection of our favorite game day classics",
		items: [
			{
				name: "Brisket Tacos",
				description:
					"A juicy brisket taco served with fresh-made pico, guacamole, and tomatillo salsa",
				price: 13,
			},
			{
				name: "Buffalo Chicken Wrap",
				description:
					"Our signature wrap filled with buffalo chicken, lettuce, tomatoes, and served with a homemade ranch sauce",
				price: 12,
				modifiers: ["spicy"],
			},
			{
				name: "Crispy Chicken Sandwich",
				description:
					"Crispy fried chicken on a brioche bun served with fries and our signature sauce",
				price: 10,
			},
			{
				name: "Smash Burger",
				description:
					"A smash burger beef patty served on brioche buns with all the signature toppings, a side of fries, and our signature sauce",
				price: 11.5,
			},
		],
	},
	{
		name: "Kids Menu",
		image: Sliders,
		description: "For game lovers with smaller appetites",
		items: [
			{
				name: "Mac and Cheese",
				description:
					"Our rich and creamy cheese sauce mixed with top-notch noodles will have your kids asking for more",
				price: 5,
				modifiers: ["vegetarian"],
			},
			{
				name: "Chicken Tenders",
				description:
					"Crispy breaded chicken tenderloins served with a side of fries and our signature sauce",
				price: 6,
			},
			{
				name: "Sliders",
				description:
					"These miniature burgers made with farm-fresh vegetables and our bangin' beef patties are the perfect size for your little ones",
				price: 7,
			},
		],
	},
	{
		name: "Drinks",
		image: Lemonade,
		description: "A selection of classic game day drinks",
		items: [
			{
				name: "Fountain Soda",
				description: "A selection of our finest fountain sodas",
				price: 2,
			},
			{
				name: "Iced Tea",
				description: "Sweet or unsweet fresh-brewed iced tea",
				price: 2,
			},
			{
				name: "Lemonade",
				description:
					"Our lemonade is made fresh from scratch every day",
				price: 2,
			},
		],
	},
	{
		name: "Desserts",
		image: Dessert,
		description: "Sweet Treats for the post-game wrap up",
		items: [
			{
				name: "Chocolate Chip Cookie Cake",
				description: "A slice of gooey and chocolatey cookie cake",
				price: 6,
			},
			{
				name: "Ice Cream Sundae",
				description:
					"Fresh vanilla bean ice cream drizzled with caramel syrup and topped with crushed toffee",
				price: 6,
			},
			{
				name: "Apple Pie",
				description:
					"Fresh apples baked into a buttery crust and topped with cinnamon strudel",
				price: 7,
			},
			{
				name: "Chocolate Cheesecake",
				description:
					"A dense and rich slice of chocolate cheesecake tooped with freshly-whipped cream",
				price: 7,
			},
			{
				name: "Pie of the Day",
				description:
					"Ask your server about our pie of the day, made fresh every day",
				price: 7,
			},
		],
	},
] as const;

import Party from "@/public/images/party.jpg";
import Love from "@/public/images/love.jpg";
import SuperBowl from "@/public/images/super bowl.jpg";
import SaintPatricks from "@/public/images/saint patricks.jpg";
import Easter from "@/public/images/easter.jpg";
import MemorialDay from "@/public/images/memorial day.jpg";
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
		name: "super bowl",
		description:
			"help us live up to our name by watching american football with us. we'll have a special menu and drink specials all day long!",
		image: SuperBowl,
		month: "feb",
		day: 11,
		align: "object-[50%_60%]",
	},
	{
		name: "valentines day",
		description:
			"bring a loved one with you to celebrate valentines day, and get a free dessert!",
		image: Love,
		month: "feb",
		day: 14,
		align: "object-[50%_90%]",
	},
	{
		name: "st. patricks day",
		description:
			"hope you're wearing green, because we're celebrating st. patty's day with a bang. don't get pinched!",
		image: SaintPatricks,
		month: "mar",
		day: 17,
	},
	{
		name: "easter",
		description:
			"we're hosting an easter egg hunt for the kids, and a special easter brunch for the adults. find the golden egg and win a prize!",
		image: Easter,
		month: "mar",
		day: 31,
	},
	{
		name: "memorial day",
		description:
			"join us for a special memorial day event, where we'll be honoring our veterans and active duty military!",
		image: MemorialDay,
		month: "may",
		day: 27,
	},
	{
		name: "anniversary",
		description:
			"come celebrate our anniversary with us! as a thank you to our loyal customers, we'll be offering a special discount on all food and drinks for a limited time!",
		image: Party,
		month: "nov",
		day: 14,
	},
];

export const Libre = Libre_Baskerville({
	subsets: ["latin"],
	weight: "400",
});
