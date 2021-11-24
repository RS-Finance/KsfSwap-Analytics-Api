import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const blockClient = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://thegraph.kcc.network/subgraphs/name/kcc-blocks",
  }),
  cache: new InMemoryCache(),
});
