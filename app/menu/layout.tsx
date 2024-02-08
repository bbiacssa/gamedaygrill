"use client";
import { useWindowDimensions } from "@/lib/useWindowDimensions";
import { Metadata } from "next";

export default function Layout({ mobile, desktop }: any) {
	const dimensions = useWindowDimensions();

	return (
		<div>{dimensions && (dimensions.width >= 768 ? desktop : mobile)}</div>
	);
}
