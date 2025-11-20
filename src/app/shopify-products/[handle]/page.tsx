import { shopifyFetch } from "@/lib/shopify";
import { GET_PRODUCT_BY_HANDLE } from "@/lib/queries/product";
import { AddToCartButton } from "@/components/add-to-cart-button";

export default async function ShopifyProductPage({
  params,
}: {
  params: { handle: string };
}) {
  const data = await shopifyFetch(GET_PRODUCT_BY_HANDLE, {
    handle: params.handle,
  });

  const product = data.product;

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  const selectedVariant = product.variants?.edges?.[0]?.node;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            {product.images?.edges?.map((image: any, idx: number) => (
              <div
                key={idx}
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden"
              >
                <img
                  src={image.node?.url}
                  alt={product.title || 'Product image'}
                  className="w-full h-full object-cover"
                />
              </div>
            )) || <div className="text-gray-500">No images available</div>}
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.title || 'Untitled Product'}</h1>
              <p className="text-gray-600 text-lg">{product.description || 'No description available'}</p>
            </div>

            {/* Variants */}
            {product.variants?.edges?.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3">Options:</h3>
                <div className="space-y-2">
                  {product.variants.edges.map((variant: any) => (
                    <div
                      key={variant.node?.id}
                      className="p-3 border rounded cursor-pointer hover:bg-gray-50"
                    >
                      {variant.node?.title || 'Variant'} -{" "}
                      <span className="font-bold">
                        ${variant.node?.price?.amount || '0.00'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Add to Cart */}
            {selectedVariant && (
              <AddToCartButton variantId={selectedVariant.id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
