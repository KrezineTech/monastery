import { shopifyFetch } from "@/lib/shopify";
import { GET_PRODUCT_BY_HANDLE } from "@/lib/queries/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ handle: string }> }
) {
  try {
    const { handle } = await params;
    const data = await shopifyFetch(GET_PRODUCT_BY_HANDLE, {
      handle,
    });

    if (!data.product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ product: data.product });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
