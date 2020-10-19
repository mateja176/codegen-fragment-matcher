import { ApolloClient, InMemoryCache } from '@apollo/client';
import possibleTypesResult from './generated/graphql';

export default new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(possibleTypesResult),
});
