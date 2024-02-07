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
			<div className="grid h-[100vh] place-items-center">
				<Carousel
					className="h-2/3 w-3/4 md:w-2/3"
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
											"absolute left-0 top-0 h-full w-full object-cover pl-4 " +
											event.align
										}
									/>
									<div className="absolute bottom-0 z-10 h-1/2 w-[calc(100%_-_1rem)] bg-gradient-to-t from-black"></div>
									<div className="absolute bottom-0 z-20 flex h-fit w-full items-end gap-4 pr-20">
										<div className="z-10 flex h-fit w-20 flex-col items-center justify-end bg-zinc-800 p-2">
											<h1 className="text-4xl">
												{event.day}
											</h1>
											<h1 className="text-xl font-light tracking-widest">
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
			<div className="flex h-96 flex-col items-center gap-6">
				<h1
					className={
						Libre.className + " text-xl text-beige md:text-3xl"
					}
				>
					planning out a gathering?
				</h1>
				<div className="h-0.5 w-32 bg-beige"></div>
				<p className="mb-2 w-2/3 text-center text-lg font-light md:mb-4 md:w-1/2 md:text-xl">
					We offer catering services for events no matter the size,
					whether it&apos;s a small family gathering or a large
					corporate event, we can handle it all.
				</p>
				<a href="mailto:">
					<Button
						className="p-6 text-lg md:p-8"
						variant="outline"
						size="lg"
					>
						Inquire now
						<ArrowRight className="ml-2" />
					</Button>
				</a>
			</div>
		</>
	);
}
