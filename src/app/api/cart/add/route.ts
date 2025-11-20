import { shopifyFetch } from "@/lib/shopify";
import { ADD_TO_CART } from "@/lib/queries/cart";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cartId, variantId, quantity = 1 } = body;

    if (!cartId || !variantId) {
      return NextResponse.json(
        { error: "Missing cartId or variantId" },
        { status: 400 }
      );
    }

    const data = await shopifyFetch(ADD_TO_CART, {
      cartId,
      lines: [
        {
          merchandiseId: variantId,
          quantity,
        },
      ],
    });

    if (!data.cartLinesAdd?.cart) {
      return NextResponse.json(
        { error: "Failed to add to cart" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      cartId: data.cartLinesAdd.cart.id,
      checkoutUrl: data.cartLinesAdd.cart.checkoutUrl,
    });
  } catch (error) {
    console.error("Error adding to cart:", error);
    return NextResponse.json(
      { error: "Failed to add to cart" },
      { status: 500 }
    );
  }
}
