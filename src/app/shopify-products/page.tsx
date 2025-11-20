import { shopifyFetch } from "@/lib/shopify";
import { GET_ALL_PRODUCTS } from "@/lib/queries/products";
import Link from "next/link";

export default async function ShopifyProductsPage() {
  const data = await shopifyFetch(GET_ALL_PRODUCTS);
  const products = data.products.edges;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12">Shop All Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(({ node }: any) => (
            <Link
              key={node.id}
              href={`/shopify-products/${node.handle}`}
              className="group"
            >
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="aspect-square bg-gray-200 overflow-hidden">
                  {node.images.edges[0]?.node?.url && (
                    <img
                      src={node.images.edges[0].node.url}
                      alt={node.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  )}
                </div>

                <div className="p-4">
                  <h2 className="font-semibold text-lg mb-2">{node.title}</h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {node.description}
                  </p>
                  <p className="text-xl font-bold">
                    {node.priceRange.minVariantPrice.amount}{" "}
                    {node.priceRange.minVariantPrice.currencyCode}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
