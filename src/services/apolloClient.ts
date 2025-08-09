import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { RetryLink } from '@apollo/client/link/retry';
// import { WebSocketLink } from '@apollo/client/link/ws'; // Uncomment for subscriptions

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
});

const retryLink = new RetryLink({
  attempts: {
    max: 3,
  retryIf: (error) => !!error,
  },
  delay: {
    initial: 300,
    max: 2000,
    jitter: true,
  },
});

// Example for subscriptions (needs ws endpoint)
// const wsLink = new WebSocketLink({
//   uri: 'wss://your-graphql-endpoint.com/graphql',
//   options: { reconnect: true },
// });

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   from([retryLink, httpLink])
// );

const client = new ApolloClient({
  link: from([retryLink, httpLink]), // Use splitLink for subscriptions
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
