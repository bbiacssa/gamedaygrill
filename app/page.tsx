import Navbar from "@/components/Navbar";
import Image from "next/image";
import headerImage from "@/public/images/grilled steak.png";
import foodImage from "@/public/images/food bowl.jpg";
import flouredHands from "@/public/images/floured hands.jpg";
import sandwich from "@/public/images/sandwich.jpg";
import seizeTheOpportunity from "@/public/images/Seize the Opportunity.png";
import { members, Libre } from "@/app/config";

export default function About() {
	return (
		<div className="h-screen">
			<Navbar name="about" />
			<div className="h-96 relative">
				<Image
					src={headerImage}
					alt="Meat cooked on a grill."
					className="h-full object-cover"
				/>
				<div className="h-full w-1/2 absolute left-0 top-0 flex justify-center items-center">
					<h1
						className={
							"text-5xl text-center w-2/3 " + Libre.className
						}
					>
						a modern twist on a game day classic
					</h1>
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
								Libre.className +
								" text-2xl font-bold text-beige mb-4"
							}
						>
							what we do
						</h1>
						<p className="font-light text-xl w-2/3 text-center">
							Game Day Grill puts a modern dining experience spin
							on the game day classics we all know and love! By
							using high-quality and fresh ingredients, our team
							creates a delicious product that will keep you
							coming back for more.
						</p>
					</div>
				</div>
				<div className="h-96 my-8">
					<h1
						className={
							"text-center text-2xl mb-4 text-beige " +
							Libre.className
						}
					>
						our team
					</h1>
					<div className="h-2/3 flex justify-center gap-24 px-12">
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
										role="img"
										aria-label={member.name}
									></div>
									<h1
										className={
											"font-bold mt-4 text-lg text-beige " +
											Libre.className
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
				<div className="h-[48rem] grid grid-cols-2 grid-rows-2 font-light">
					<Image
						src={flouredHands}
						quality={50}
						alt="food bowl"
						className="w-full h-full object-cover"
					/>
					<div className="text-center flex flex-col justify-center items-center h-full">
						<h1
							className={
								"text-beige text-2xl mb-2 " + Libre.className
							}
						>
							interested in reserving?
						</h1>
						<p className="w-2/3 mb-4 text-lg">
							either shoot us an email at the address shown below
							or give us a phone call. we&apos;ll try our best to
							save you a spot with us.
						</p>
						<div className="flex items-center gap-4">
							<svg
								className="scale-50"
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="44"
								viewBox="0 0 48 44"
								fill="none"
							>
								<path
									d="M40 7.80005H8C5.79086 7.80005 4 9.41182 4 11.4V33C4 34.9883 5.79086 36.6 8 36.6H40C42.2091 36.6 44 34.9883 44 33V11.4C44 9.41182 42.2091 7.80005 40 7.80005Z"
									stroke="#EFEFD0"
									strokeWidth="4"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M44 13.2002L26.06 23.4602C25.4425 23.8084 24.7286 23.993 24 23.993C23.2714 23.993 22.5575 23.8084 21.94 23.4602L4 13.2002"
									stroke="#EFEFD0"
									strokeWidth="4"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<a href="mailto:acme@company.com">
								acme@company.com
							</a>
						</div>
						<div className="flex items-center font-light gap-4">
							<svg
								className="scale-50"
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="44"
								viewBox="0 0 48 44"
								fill="none"
							>
								<path
									d="M43.9999 30.456V35.856C44.0021 36.3573 43.888 36.8535 43.6649 37.3129C43.4417 37.7722 43.1145 38.1845 42.704 38.5234C42.2936 38.8623 41.809 39.1203 41.2814 39.2809C40.7537 39.4415 40.1946 39.5012 39.6399 39.456C33.4855 38.8542 27.5739 36.9615 22.3799 33.93C17.5475 31.1664 13.4505 27.4791 10.3799 23.13C6.99982 18.4342 4.89635 13.0878 4.23987 7.52403C4.18989 7.02627 4.25562 6.5246 4.43287 6.05095C4.61012 5.57731 4.89501 5.14207 5.2694 4.77295C5.64379 4.40382 6.09948 4.1089 6.60745 3.90697C7.11542 3.70503 7.66455 3.6005 8.21987 3.60003H14.2199C15.1905 3.59143 16.1314 3.90077 16.8674 4.47039C17.6033 5.04 18.084 5.83103 18.2199 6.69603C18.4731 8.42415 18.9428 10.1209 19.6199 11.754C19.889 12.3983 19.9472 13.0985 19.7877 13.7716C19.6282 14.4448 19.2576 15.0626 18.7199 15.552L16.1799 17.838C19.027 22.3444 23.1728 26.0756 28.1799 28.638L30.7199 26.352C31.2636 25.8681 31.9502 25.5346 32.6981 25.391C33.446 25.2474 34.224 25.2999 34.9399 25.542C36.7544 26.1514 38.6397 26.5741 40.5599 26.802C41.5314 26.9254 42.4187 27.3658 43.0529 28.0395C43.6872 28.7132 44.0242 29.5733 43.9999 30.456Z"
									stroke="#EFEFD0"
									strokeWidth="4"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<a href="tel:1234567890">123-456-7890</a>
						</div>
					</div>
					<div className="text-center flex flex-col justify-center items-center h-full gap-4">
						<div>
							<h1
								className={
									"text-beige text-2xl mb-1 " +
									Libre.className
								}
							>
								location
							</h1>
							<p className="text-xl">
								2645 Wilkinson Street <br />
								Windsor Mill, MA 21244
							</p>
						</div>
						<div>
							<h1
								className={
									"text-beige text-2xl mb-1 " +
									Libre.className
								}
							>
								hours
							</h1>
							<p className="text-xl">
								<b>Lunch</b>
								<br />
								11am - 2pm
								<br />
								<b>Dinner</b>
								<br />
								4pm - 11pm{" "}
							</p>
						</div>
					</div>
					<Image
						src={sandwich}
						alt="food bowl"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="h-fit grid grid-cols-2 tracking-wider font-normal mt-8 bg-zinc-900">
					<div className="flex items-center flex-col justify-center gap-2 text-sm">
						<h1
							className={
								Libre.className +
								" text-xl text-beige tracking-normal"
							}
						>
							Ben Barber Innovation Academy &mdash; Chapter 1
							&mdash; 02-0872
						</h1>
						<h1 className="">
							Kaitlyn Ferguson, Gabriel Gomez, Kaden Nguyen
						</h1>
						<h1>Ben Barber Innovation Academy</h1>
						<h1>Mansfield, TX</h1>
					</div>
					<div className="grid place-items-center p-4">
						<Image
							src={seizeTheOpportunity}
							alt={"Seize the Opportunity"}
							className="w-3/5 my-4 p-6 bg-white"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
