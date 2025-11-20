import { shopifyFetch } from "@/lib/shopify";
import { CREATE_CART } from "@/lib/queries/cart";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await shopifyFetch(CREATE_CART);
    return NextResponse.json({ cartId: data.cartCreate.cart.id });
  } catch (error) {
    console.error("Error creating cart:", error);
    return NextResponse.json(
      { error: "Failed to create cart" },
      { status: 500 }
    );
  }
}
