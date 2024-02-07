"use client";
import Navbar from "@/components/Navbar";
import Image, { StaticImageData } from "next/image";
import headerImage from "@/public/images/grilled steak.png";
import foodImage from "@/public/images/food bowl.jpg";
import flouredHands from "@/public/images/floured hands.jpg";
import sandwich from "@/public/images/sandwich.jpg";
import seizeTheOpportunity from "@/public/images/Seize the Opportunity.png";
import { motion } from "framer-motion";
import { members, Libre } from "@/app/config";

export default function About() {
	return (
		<div>
			<Navbar name="about" />
			<div className="w-full">
				<div className="relative h-80 md:h-96 ">
					<Image
						priority={true}
						src={headerImage}
						alt="Meat cooked on a grill."
						className="h-full object-cover object-[70%_50%] opacity-50 md:opacity-85"
					/>
					<div className="absolute left-0 top-0 flex h-full w-full items-center justify-center px-8 md:w-2/3 md:bg-gradient-to-r md:from-black md:from-50% md:px-0 lg:w-1/2">
						<motion.h1
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								duration: 1,
							}}
							className={
								"w-full text-center text-4xl sm:w-full sm:text-5xl md:w-2/3 " +
								Libre.className
							}
						>
							a modern twist on a game day classic
						</motion.h1>
					</div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.75 }}
						viewport={{ once: true }}
						className="sm:grid sm:h-96 sm:grid-cols-2"
					>
						<div className="h-48 overflow-hidden p-8 sm:h-full sm:p-12">
							<Image
								src={foodImage}
								priority={true}
								className="h-full w-full object-cover"
								alt="A green leafy vegetable dish in a bowl."
							/>
						</div>
						<div className="flex flex-col items-center justify-center">
							<h1
								className={
									Libre.className +
									" lsm:text-2xl mb-4 text-2xl font-bold text-beige"
								}
							>
								what we do
							</h1>
							<p className="w-2/3 text-center font-light sm:text-lg">
								Game Day Grill puts a modern dining experience
								spin on the game day classics we all know and
								love! By using high-quality and fresh
								ingredients, our team creates a delicious
								product that will keep you coming back for more.
							</p>
						</div>
					</motion.div>
					<div className="my-12 h-fit sm:my-8 sm:h-96">
						<motion.h1
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.75 }}
							viewport={{ once: true }}
							className={
								"mb-4 text-center text-2xl text-beige " +
								Libre.className
							}
						>
							our team
						</motion.h1>
						<div className="flex flex-col sm:h-2/3 sm:flex-row sm:justify-center sm:gap-8 sm:px-8 md:gap-16">
							{members.map((member, index) => {
								return (
									<motion.div
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{
											duration: 1,
											delay: index * 0.1,
										}}
										viewport={{ once: true }}
										key={member.name}
										className="relative flex h-48 w-full flex-col items-start justify-end text-center sm:block sm:h-auto sm:bg-opacity-0"
									>
										<div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-r from-black to-60% sm:hidden"></div>
										<Image
											src={member.image}
											priority={true}
											alt={member.name}
											className={
												"absolute -z-10 h-full w-full bg-center object-cover sm:static " +
												(!member.align
													? "object-[50%_30%] sm:object-center"
													: member.align)
											}
										/>
										<h1
											className={
												"z-10 ml-4 text-2xl font-bold text-beige sm:mt-4 sm:text-xl " +
												Libre.className
											}
										>
											{member.name}
										</h1>
										<p className="z-10 mb-4 ml-4 font-light">
											{member.details}
										</p>
									</motion.div>
								);
							})}
						</div>
					</div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						className="grid h-[40rem] grid-cols-5 grid-rows-2 font-light md:h-[48rem] md:grid-cols-2"
					>
						<Image
							src={flouredHands}
							priority={true}
							quality={50}
							alt="food bowl"
							className="col-span-2 h-full w-full object-cover md:col-span-1"
						/>
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							className="col-span-3 flex h-full flex-col items-center justify-center text-center md:col-span-1"
						>
							<h1
								className={
									"mb-2 text-lg text-beige md:text-2xl " +
									Libre.className
								}
							>
								interested in reserving?
							</h1>
							<p className="mb-4 w-2/3 md:text-lg">
								either shoot us an email at the address shown
								below or give us a phone call. we&apos;ll try
								our best to save you a spot with us.
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
							<div className="flex items-center gap-4 font-light">
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
						</motion.div>
						<div className="col-span-3 flex h-full flex-col items-center justify-center gap-4 text-center md:col-span-1">
							<div>
								<h1
									className={
										"mb-1 text-lg text-beige md:text-2xl " +
										Libre.className
									}
								>
									location
								</h1>
								<p className="md:text-xl">
									2645 Wilkinson Street <br />
									Windsor Mill, MA 21244
								</p>
							</div>
							<div>
								<h1
									className={
										"mb-1 text-lg text-beige md:text-2xl " +
										Libre.className
									}
								>
									hours
								</h1>
								<p className="md:text-xl">
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
							priority={true}
							src={sandwich}
							alt="food bowl"
							className="col-span-2 h-full w-full object-cover md:col-span-1"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						viewport={{ once: true }}
						className="mt-8 grid h-fit grid-cols-5 bg-zinc-900 font-normal tracking-wider md:grid-cols-2"
					>
						<div className="col-span-3 flex flex-col items-center justify-center gap-1 p-4 text-center text-sm md:col-span-1 md:gap-2">
							<h1
								className={
									Libre.className +
									" tracking-normal text-beige md:text-xl"
								}
							>
								Ben Barber Innovation Academy <br /> Chapter 1
								&mdash; 02-0872
							</h1>
							<h1 className="">
								Kaitlyn Ferguson, Gabriel Gomez, Kaden Nguyen
							</h1>
							<h1>Ben Barber Innovation Academy</h1>
							<h1>Mansfield, TX</h1>
						</div>
						<div className="order-1 col-span-2 grid place-items-center md:col-span-1 md:p-4">
							<Image
								priority={true}
								src={seizeTheOpportunity}
								alt={"Seize the Opportunity"}
								className="my-4 h-full bg-white object-contain p-2 md:h-fit md:w-4/5 md:p-6"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
