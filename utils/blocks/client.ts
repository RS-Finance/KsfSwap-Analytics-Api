import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const blockClient = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "https://info.kucoinswap.finance/subgraphs/name/rs-finance/kcc-block",
  }),
  cache: new InMemoryCache(),
});
