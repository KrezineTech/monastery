import { shopifyFetch } from './shopify-client';

export interface CustomerAccessToken {
  accessToken: string;
  expiresAt: string;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  orders?: {
    edges: Array<{
      node: {
        id: string;
        name: string;
        orderNumber: number;
        processedAt: string;
        totalPriceV2: {
          amount: string;
          currencyCode: string;
        };
      };
    }>;
  };
}

export async function customerAccessTokenCreate(
  email: string,
  password: string
): Promise<CustomerAccessToken> {
  const query = `
    mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
      customerAccessTokenCreate(input: $input) {
        customerAccessToken {
          accessToken
          expiresAt
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const variables = {
    input: { email, password },
  };

  const response = await shopifyFetch<{
    customerAccessTokenCreate: {
      customerAccessToken: CustomerAccessToken | null;
      userErrors: Array<{ field: string[]; message: string }>;
    };
  }>(query, variables);

  const { customerAccessToken, userErrors } = response.customerAccessTokenCreate;

  if (userErrors?.length || !customerAccessToken) {
    throw new Error(userErrors?.[0]?.message || 'Login failed');
  }

  return customerAccessToken;
}

export async function getCustomer(customerAccessToken: string): Promise<Customer> {
  const query = `
    query getCustomer($customerAccessToken: String!) {
      customer(customerAccessToken: $customerAccessToken) {
        id
        firstName
        lastName
        email
        phone
        orders(first: 10) {
          edges {
            node {
              id
              name
              orderNumber
              processedAt
              totalPriceV2 {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  const variables = { customerAccessToken };

  const response = await shopifyFetch<{
    customer: Customer;
  }>(query, variables);

  return response.customer;
}

export async function customerCreate(
  firstName: string,
  lastName: string,
  email: string,
  password: string
): Promise<{ customer: Customer; userErrors: Array<{ field: string[]; message: string }> }> {
  const query = `
    mutation customerCreate($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        customer {
          id
          firstName
          lastName
          email
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const variables = {
    input: {
      firstName,
      lastName,
      email,
      password,
    },
  };

  const response = await shopifyFetch<{
    customerCreate: {
      customer: Customer | null;
      userErrors: Array<{ field: string[]; message: string }>;
    };
  }>(query, variables);

  const { customer, userErrors } = response.customerCreate;

  return {
    customer: customer || ({} as Customer),
    userErrors,
  };
}

export async function customerRecover(email: string): Promise<{ userErrors: Array<{ field: string[]; message: string }> }> {
  const query = `
    mutation customerRecover($email: String!) {
      customerRecover(email: $email) {
        userErrors {
          field
          message
        }
      }
    }
  `;

  const variables = { email };

  const response = await shopifyFetch<{
    customerRecover: {
      userErrors: Array<{ field: string[]; message: string }>;
    };
  }>(query, variables);

  return response.customerRecover;
}
