import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
const YOUR_DOMAIN = "https://wh41bp69-3000.use.devtunnels.ms/";

export async function POST(req: NextRequest) {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
            currency: "usd",
            product_data: {
                name: ":3",
                description: ":D"
            },
            unit_amount: 420
        },
        quantity: 1
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  if (session.url) {
    console.log(session.url);
    return NextResponse.redirect(session.url);
  }
}
