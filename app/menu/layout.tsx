"use client";
import { useWindowDimensions } from "@/lib/useWindowDimensions";

export default function Layout({ mobile, desktop }: any) {
	const dimensions = useWindowDimensions();

	return (
		<div>{dimensions && (dimensions.width >= 768 ? desktop : mobile)}</div>
	);
}
