import { shopifyFetch } from '@/lib/shopify-client';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('id');

    if (!productId) {
      return Response.json(
        { error: 'Product ID is required' },
        { status: 400 }
      );
    }

    const query = `
      query {
        product(id: "${productId}") {
          id
          title
          images(first: 20) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    `;

    const data = await shopifyFetch(query);

    if (!data.product) {
      return Response.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    const images = data.product.images.edges.map((edge: any) => ({
      url: edge.node.url,
      altText: edge.node.altText,
    }));

    return Response.json({
      product: {
        id: data.product.id,
        title: data.product.title,
        images,
      },
    });
  } catch (error) {
    console.error('Error fetching product images:', error);
    return Response.json(
      { error: 'Failed to fetch product images' },
      { status: 500 }
    );
  }
}
