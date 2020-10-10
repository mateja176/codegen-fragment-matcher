import { ApolloClient, InMemoryCache } from '@apollo/client';
import possibleTypes from './generated/graphql';

export default new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache({ possibleTypes }),
});
