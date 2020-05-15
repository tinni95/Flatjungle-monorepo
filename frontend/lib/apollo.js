import ApolloClient from 'apollo-boost';
import 'cross-fetch/polyfill';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
});

export default client;