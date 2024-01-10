import Navbar from "@/components/Navbar";
import Image from "next/image";
import headerImage from "@/public/images/grilled steak.png";
import foodImage from "@/public/images/food bowl.jpg";
import { members } from "@/app/config";
import { Libre_Baskerville } from "next/font/google";

const libre = Libre_Baskerville({
	weight: "400",
	subsets: ["latin"],
});

export default function About() {
	return (
		<>
			<Navbar name="about" />
			<div className="absolute top-0 w-full h-48 bg-gradient-to-b from-black z-10"></div>
			<div className="h-96 relative">
				<Image
					src={headerImage}
					alt="Meat cooked on a grill."
					className="h-full object-cover"
				/>
				<div className="h-full w-1/2 absolute left-0 top-0 flex justify-center items-center">
					<h1
						className={
							"text-5xl text-center w-2/3 " + libre.className
						}
					>
						a modern twist on a game day classic
					</h1>
				</div>
			</div>
			<div className="h-96 flex justify-center items-center flex-col">
				<h1
					className={
						libre.className + " text-3xl font-bold text-beige mb-6"
					}
				>
					game day, reimagined
				</h1>
				<div className="bg-beige h-0.5 w-32 mb-4"></div>
				<p className="font-light text-xl w-1/2 text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
			</div>
			<div className="grid h-96 grid-cols-2">
				<div className="p-12">
					<div
						style={{
							backgroundImage: `url('${foodImage.src}')`,
						}}
						className="h-full bg-cover bg-center"
						role="img"
						aria-label="Green Leafy Vegetable Dish in Gray Steel Bowl With Fork"
					></div>
				</div>
				<div className="flex items-center justify-center flex-col">
					<h1
						className={
							libre.className +
							" text-2xl font-bold text-beige mb-4"
						}
					>
						insert heading
					</h1>
					<p className="font-light text-xl w-2/3 text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					</p>
				</div>
			</div>
			<div className="h-72 mt-8">
				<h1
					className={
						"text-center text-2xl text-beige mb-4 " +
						libre.className
					}
				>
					our team
				</h1>
				<div className="h-full flex justify-center gap-24 px-12">
					{members.map((member) => {
						return (
							<div
								key={member.name}
								className="text-center w-full"
							>
								<div
									className={
										"bg-beige h-full w-full bg-cover bg-center " +
										(member.align == ""
											? "bg-center"
											: member.align)
									}
									style={{
										backgroundImage: `url('${member.image.src}')`,
									}}
								></div>
								<h1
									className={
										"font-bold mt-4 text-lg text-beige " +
										libre.className
									}
								>
									{member.name}
								</h1>
								<p className="font-light w-full">
									{member.details}
								</p>
							</div>
						);
					})}
				</div>
			</div>
			<div className="h-24"></div>
		</>
	);
}
