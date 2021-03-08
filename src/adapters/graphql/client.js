import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  gql,
  from
} from "@apollo/client";
import { ErrorLink, onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";

import { getToken } from "./getToken";

const getClient = async () => {
  const token = await getToken();

  const errorLink = onError(({ graphqlError, networkError }) => {
    if (graphqlError) {
      graphqlError.map(({ message, location, path }) => {
        return "error";
      });
    }
  });

  const link = from([
    errorLink,
    new HttpLink({ uri: "https://vocedonna.terotero.it:5000/graphql/" })
  ]);

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    //const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        Authorization: token ? `${token}` : ""
      }
    };
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(link)
  });
  return client;
};

export { getClient };
