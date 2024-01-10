import Boss from "@/public/images/boss.jpg";
import Chef from "@/public/images/chef.jpg";
import Intern from "@/public/images/intern.jpg";
import Waiter from "@/public/images/waiter.jpg";
import { StaticImageData } from "next/image";

type Member = {
	image: StaticImageData;
	name: string;
	details: string;
	align?: string;
};

export const members: Member[] = [
	{
		image: Boss,
		name: "Jane Doe",
		details: "something about jane",
	},
	{
		image: Chef,
		name: "John Doe",
		details: "something about john",
		align: "bg-top",
	},
	{
		image: Intern,
		name: "John B Doe",
		details: "something about john",
	},
	{
		image: Waiter,
		name: "John C Doe",
		details: "something about john",
	},
];
