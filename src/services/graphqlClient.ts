// import client from './apolloClient';
import { gql } from '@apollo/client';

// --- Example Queries ---
export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      ...UserFields
    }
  }
  fragment UserFields on User {
    email
    role
  }
`;

// --- Example Mutation ---
export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
    }
  }
`;

// --- Example Subscription ---
// Requires wsLink in apolloClient.ts
// export const USER_ADDED = gql`
//   subscription OnUserAdded {
//     userAdded {
//       id
//       name
//     }
//   }
// `;

// --- Example Directive ---
export const GET_ADMIN_USERS = gql`
  query GetAdminUsers {
    users @include(if: true) {
      id
      name
    }
  }
`;

// --- Example Federation/Stitch ---
export const GET_PRODUCT_WITH_REVIEWS = gql`
  query GetProductWithReviews($id: ID!) {
    product(id: $id) {
      id
      name
      reviews {
        id
        content
      }
    }
  }
`;

// --- Usage Example ---
// import client, { GET_USERS, CREATE_USER } from './graphqlClient';
// client.query({ query: GET_USERS });
// client.mutate({ mutation: CREATE_USER, variables: { input: { name: 'A' } } });
//
// Endpoint: process.env.NEXT_PUBLIC_GRAPHQL_URI

// --- Optimistic UI Example ---
// client.mutate({
//   mutation: CREATE_USER,
//   variables: { input: { name: 'A' } },
//   optimisticResponse: {
//     createUser: { id: 'temp-id', name: 'A', __typename: 'User' },
//   },
// });
