"use client";
import React, { ReactNode } from "react";

import { useState, useEffect } from "react";

function getWindowDimensions() {
	"use client";
	if (typeof window == "undefined") return { width: 0, height: 0 };
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}

export default function Layout({ mobile, desktop }: any) {
	const dimensions = useWindowDimensions();

	return (
		<div>{dimensions && (dimensions.width >= 768 ? desktop : mobile)}</div>
	);
}
