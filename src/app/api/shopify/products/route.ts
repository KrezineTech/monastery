import { shopifyFetch } from '@/lib/shopify-client';

export async function GET() {
  try {
    const query = `
      query {
        products(first: 20) {
          edges {
            node {
              id
              title
              handle
              description
              images(first: 1) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
              variants(first: 1) {
                edges {
                  node {
                    id
                    price {
                      amount
                      currencyCode
                    }
                    compareAtPrice {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const data = await shopifyFetch(query);
    
    return Response.json({
      products: data.products.edges
        .filter((edge: any) => edge.node.images.edges.length > 0) // Only include products with images
        .map((edge: any) => ({
          id: edge.node.handle, // Use handle as ID for routing
          name: edge.node.title || 'Product',
          title: edge.node.title || 'Product',
          handle: edge.node.handle,
          description: edge.node.description,
          image: edge.node.images.edges[0]?.node.url || '',
          altText: edge.node.images.edges[0]?.node.altText || edge.node.title || 'Product image',
          price: parseFloat(edge.node.variants.edges[0]?.node.price.amount || '0'),
          originalPrice: edge.node.variants.edges[0]?.node.compareAtPrice?.amount 
            ? parseFloat(edge.node.variants.edges[0].node.compareAtPrice.amount)
            : null,
          currencyCode: edge.node.variants.edges[0]?.node.price.currencyCode || 'INR',
        })),
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return Response.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
