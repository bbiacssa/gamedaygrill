"use client";
import Navbar from "@/components/Navbar";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import { Events, Libre } from "@/app/config";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function EventsComponent() {
	return (
		<>
			<Navbar name="events" />
			<div className="grid place-items-center h-[100vh]">
				<Carousel
					className="w-2/3 h-2/3"
					opts={{
						loop: true,
					}}
				>
					<CarouselContent>
						{Events.map((event) => {
							return (
								<CarouselItem
									className="relative"
									key={event.name}
								>
									<Image
										src={event.image}
										alt={event.name}
										className={
											"absolute top-0 left-0 pl-4 h-full w-full object-cover " +
											event.align
										}
									/>
									<div className="absolute w-[calc(100%_-_1rem)] bottom-0 bg-gradient-to-t from-black z-10 h-1/2"></div>
									<div className="w-full h-fit absolute bottom-0 flex items-end gap-4 z-20 pr-20">
										<div className="w-20 h-fit bg-zinc-800 z-10 flex items-center justify-end flex-col p-2">
											<h1 className="text-4xl">
												{event.day}
											</h1>
											<h1 className="tracking-widest font-light text-xl">
												{event.month}
											</h1>
										</div>
										<div className="mb-4">
											<h1 className="text-3xl font-bold tracking-widest">
												{event.name}
											</h1>
											<p className="font-light tracking-wide">
												{event.description}
											</p>
										</div>
									</div>
								</CarouselItem>
							);
						})}
					</CarouselContent>
					<CarouselNext />
					<CarouselPrevious />
				</Carousel>
			</div>
			<div className="flex flex-col items-center gap-6 h-96">
				<h1 className={Libre.className + " text-beige text-3xl"}>
					planning out a gathering?
				</h1>
				<div className="bg-beige h-0.5 w-32"></div>
				<p className="w-1/2 text-center text-xl font-light mb-12">
					We offer catering services for events no matter the size,
					whether it&apos;s a small family gathering or a large
					corporate event, we can handle it all.
				</p>
				<Button className="p-8 text-lg" variant="outline" size="lg">
					Inquire now
					<ArrowRight className="ml-2" />
				</Button>
			</div>
		</>
	);
}
