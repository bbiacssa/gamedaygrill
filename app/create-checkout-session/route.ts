import { CartItem } from "@/components/CartContext";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(
	"sk_test_51OU0DgERORMJ1CaSJD1FdClHt0JMrw3WbiL31yAdXYh8qi2yuv1jFMqvAl4I2K0erW52TDNG1EXLvJyhoPC5oMdG00KoqAJehl"
);
const YOUR_DOMAIN = "https://gamedaygrill-zeta.vercel.app";

export async function POST(req: NextRequest) {
	const data: CartItem[] = await req.json();
	try {
		const session = await stripe.checkout.sessions.create({
			line_items: data.map((item) => {
				return {
					price_data: {
						currency: "usd",
						product_data: {
							name: item.item.name,
							description: item.item.description,
						},
						unit_amount: Math.round(item.item.price * 100),
					},
					adjustable_quantity: {
						enabled: true,
						minimum: 1,
						maximum: 30,
					},
					quantity: item.quantity,
				};
			}),
			shipping_address_collection: {
				allowed_countries: ["US"],
			},
			mode: "payment",
			success_url: `${YOUR_DOMAIN}?success=true`,
			cancel_url: `${YOUR_DOMAIN}?canceled=true`,
		});

		if (session.url) {
			return NextResponse.json(
				{
					url: session.url,
				},
				{
					status: 200,
				}
			);
		}
	} catch (e) {
		console.log(e);
		return NextResponse.json(
			{
				error: e,
			},
			{
				status: 500,
			}
		);
	}
}
