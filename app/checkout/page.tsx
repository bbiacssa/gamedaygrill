"use client";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function Page() {
	const searchParams = useSearchParams();
	const success = searchParams.get("success") == "true";

	return (
		<>
			<Navbar name={"none"} />
			<div className="grid h-screen place-items-center text-center">
				{success ? (
					<div>
						<div className="flex items-center gap-4">
							<Check className="stroke-green-400" />
							<h1 className="text-2xl font-bold text-green-400">
								Your order has been processed successfully!
							</h1>
							<Check className="stroke-green-400" />
						</div>
						<h1>
							You will be notified when your order is ready for
							pickup.
						</h1>
						<Link href="/">
							<Button size="lg" className="group mt-4">
								Head home?
								<ArrowRight className="ml-1 size-4 transition-all group-hover:translate-x-2" />
							</Button>
						</Link>
					</div>
				) : (
					<div className="flex flex-col items-center gap-2">
						<div className="flex items-center gap-4">
							<AlertCircle className="stroke-red-400" />
							<span className="text-2xl font-bold text-red-400">
								Something went wrong!
							</span>
							<AlertCircle className="stroke-red-400" />
						</div>
						<h1>
							Something went wrong while processing your order.
							Try again later.
						</h1>
						<Link href="/">
							<Button size="lg" className="group mt-4">
								Head home?
								<ArrowRight className="ml-1 size-4 transition-all group-hover:translate-x-2" />
							</Button>
						</Link>
					</div>
				)}
			</div>
		</>
	);
}
