"use client";

export function AddToCartButton({ variantId }: { variantId: string }) {
  async function addToCart() {
    let cartId = localStorage.getItem("cartId");

    if (!cartId) {
      const newCart = await fetch("/api/cart", { method: "POST" }).then((res) =>
        res.json()
      );
      cartId = newCart.cartId;
      localStorage.setItem("cartId", cartId);
    }

    const result = await fetch("/api/cart/add", {
      method: "POST",
      body: JSON.stringify({
        cartId,
        variantId,
      }),
    }).then((res) => res.json());

    if (result.checkoutUrl) {
      window.location.href = result.checkoutUrl;
    }
  }

  return (
    <button
      onClick={addToCart}
      className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
    >
      Add to Cart
    </button>
  );
}
