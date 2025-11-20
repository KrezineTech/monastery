export async function shopifyFetch(query: string, variables = {}) {
  const url = `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/${process.env.SHOPIFY_API_VERSION}/graphql.json`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token":
        process.env.SHOPIFY_STOREFRONT_API_TOKEN!,
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Shopify API Error:", res.status, text);
    throw new Error(`Shopify API Error: ${res.status}`);
  }

  const json = await res.json();
  if (json.errors) {
    console.error("Shopify GraphQL Errors:", json.errors);
    throw new Error("Shopify Storefront API Error");
  }

  return json.data;
}
